
# Notes Of Express 
## 🌟 Istallation process 
create a directoy and select
<!-- C:\Users\rahul\OneDrive\Pictures\Desktop\nodejs\notes" -->

```
$ mkdir myapp
$ cd myapp

```
npm npm init command create a package.json

install Express :

```
npm install express
```
install temporarily and not add to the dependancies list 

```
npm i express --no-save
```

install Nodemon

```
configure at package.json at script object :

 "start":"node index.js",
 "dev":"nodemon index.js"

```

## 🔅 Start from here .
 ### hello world print

 check this code if you want 

 ```
 // import from express
 const express = require('express);

 const app = express();

 const port =3000;

 app.get('/', (req, res) =>{
    res.send("Hello world")
 })


 app.listen(port,() =>{
    console.log("runing on port 3000")
 })

 ```
## 🔅 Express application generator

with the help of express-generator ,can be quickly create an application skeleton 

```
npx express-generator
```
some commands that you have to know about 

```
$ express -h

  Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
        --version       output the version number
    -e, --ejs           add ejs engine support
        --hbs           add handlebars engine support
        --pug           add pug engine support
    -H, --hogan         add hogan.js engine support
        --no-view       generate without view engine
    -v, --view <engine> add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory
```

File structres 

```
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

7 directories, 9 files
```

# 🤖🤖 Topics That we will cover 

1. Router 
2. MiddleWare
3. Templete engine (ejs)
4. Error Handling 
5. Rest Api using Express js
6. Mini Projects Using React js .

---
```
const express = require("express");
const app = express();

// For port ! you can simply use port_number or set  a port enviroment 
const PORT = process.env.PORT||4000


//Create a server 
app.listen(PORT,()=>{
    console.log(`will be responding soon at{PORT}`)
})

```
---

SENDING TAG 
```
app.get('/',(req,res) =>{
res.send(<h2> Sending H2 Tages </h2>)

})

```
cmd: nodemon start 

---

   FOR  SEND FILE 
   
   1. create proper path by import path;
   2. sendFile(path.resolve(__dirname)+'/index.html')


```
const express = require("express");
const path = require("path")

const app = express();

app.get('/',(req,res) =>{
    res.sendFile(path.resolve(__dirname)+'/index.html')
    
    })
const PORT = process.env.PORT||4000;
// create server .
app.listen(PORT, () => {
  console.log("listimg on port 4000");
});

```
- At index.html file set href="/abut" ;

---

# ROUTER 🐼🐼🐼
TO LOAD STATIC FILE
 #### At index.html file set href="/abut.html" ;


- To serve static files such as images, CSS files, and JavaScript files, use the **express.static built-in middleware function** in Express.

```
express.static(root, [options])
```
- 

```
To Use MiddleWare : app.use() create middleWare 

app.use(express.static('public'))


```
#### 🕵️‍♂️ DONT"T FORGET TO USE MIDDLEWARE 😳

```

const express = require("express");
const path = require("path")


const app = express();
app.use(express.static('public'))

app.get('/',(req,res) =>{
    res.sendFile(path.resolve(__dirname)+'/index.html')
    })

app.get('/about',(req,res) =>{
    res.sendFile(path.resolve(__dirname)+'/about.html')
    })


const PORT = process.env.PORT||4000;
// create server .
app.listen(PORT, () => {
  console.log("listimg on port 4000");
});

```

## ⬇️ for download file 
- At index.html

```

 app.get("/download", (req,res) =>{
   const file = `${__dirname}/uploads/text.txt`;
   res.download(file); 
 })

```
- change on res.downoad

---
### Dynamic data Display 
 - We always use Templte Engine 
 - pug , ejs , mustach

How to use 

1. import first 
```
app.set("view engine" , :"ejs")          // to set 

app.set("view eingine")                  // to see



to set view varible 
app.set("view",path.resolve(__dirname)+"/templete")

```

---
dont forget to set engine 
and dont use .html extension in HTML file.

```
app.set("view engine" ,"ejs");   //<--------

app.get("/",(req,res) =>{
    res.render("index")
})

  res.render("index",{
    title:" Avialable page "
  })

```

- BASICALLY : it takes path to the view file without extension . it start looking file inside the given folder , **in our case "Views" directory**

- Change all file index.html to index.ejs
- and instead of res.send() method now use res.render() and all things will be the same.
  

- [vist to Know More About Ejs ](https://ejs.co/):

---

How To Reduce complexity of route 

With the help of Router we can easily manage Routes


```
---router
     |
     |------index.ejs


 ```

```
code :
const router = require("express").Router();


router.get('/',(req,res)=>{
    res.render('index',{title:"index html file"})
})

router.get('/',(req,res)=>{
    res.render('about',{title:"about html file"})
})


// these are also exists 


module.exports=router;

```

***AND*** at the main fiel ***app.js***

<-------->means added 

```

const express = require("express");
const path = require("path")
const mainRouter = require('./router/index') <----------->


app.set("view engine","ejs")

// app.use(express.static('public'))

app.use(mainRouter) <------------------------->

//app.use("/en" ,mainRouter)   [we can use prefix which we can see easily on the routes]


const PORT = process.env.PORT||4000;
// create server .
app.listen(PORT, () => {
  console.log("listimg on port 4000");
});

```

```
http://localhost:4000/en
```

We can manage router seprate file with i











t:


# MiddleWare 


![middle ware link](Screenshot%202023-08-29%20145941.png)

### [click to know more about it ]( https://selvaganesh93.medium.com/how-node-js-middleware-works-d8e02a936113)

There are  5 types of Middleware, first we have seen above app.use(express,static("public")) 

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware


1. Applications-level middleware : Such as static etc..
2. create by yourself .
3. [THIRD PARTY MIDDLEWARE](https://blog.bitsrc.io/5-express-middleware-libraries-every-developer-should-know-94e2728f7503)
  



```
router.get('/api/products',(req,res,start) =>{

res.json([
{id:1.
name:"chrome"
},
{id:1234,
name:"firefox"
}
])
})
```
```
localhost:4000/api/products?api_key=123467

api/products (is a routes )
 
```
/products?api_key=123467 
is a query string


- get in where is api file is created 
- At the index.js

```
const apiKeyMiddleWare =require("../middleware/apiKey")


router.get("/api/products",apiKeyMiddleWare, (req, res ) => {
  res.json([
    { id: 123, name: "chrome" },
    { id: 12345, name: "firefox" },
  ]);
});
```

INSTEAD of appliing single middleware in aparticular router .
WE will appling in evey middleware. 

 INDEX.JS


```
const router = require("express").Router();
const apiKeyMiddleWare = require('../middlewares/apiKey')

//To use router level means applie on evey router .
router.use(apiKeyMiddleWare) 
// applied on every middleware. index and about too



router.get("/", (req, res) => {
  res.render("index", { title: "index html file" });
});

router.get("/", (req, res) => {
  res.render("about", { title: "about html file" });
});

router.get("/api/products", (req, res) => {
  res.json([
    { id: 123, name: "chrome" },
    { id: 12345, name: "firefox" },
  ]);
});

// these are also exists

module.exports = router;


```
We can applie multiple middleware in single router by [middleware1,middleware2,etc...]

---
