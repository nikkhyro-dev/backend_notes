<!-- Markup :  # Heading 1 #
**Strong text**
 [Named Link](http://www.google.fr/ "Named link title") and http://www.google.fr/ or <http://example.com/>
`code()`
[ ] An uncompleted task
[X] An uncompleted task
  > Blockquote

 * /oneDrive/pictures/desktop/MongoDB <<<<<<<<<<<<<<<<<<<git path>>>>>>>>>>>>>>>>


          >> Nested Blockquote
Markup : ![picture alt](http://via.placeholder.com/200x150 "Title is optional") -->



### Mongo DB Notes

#### Basic -> Introduction to MongoDB , NO SQL V/s SQL , JSON V/s BSON, Mnaging DB & Collections ,Advanced CRUD Operations, Comparioson Operator, Cursor in MongoDB , Logical Operators , Sexpr & Elements Operator , Projection & RelationShip Embedded Documents .

----
### ADVANCED -> Introduction to Indexes , Creating and Managing Index 
 ### UnderStanding the Aggregation Framwork 
  #### Introduction to Aggregation ,Basic Aggregation Operation , Combining Aggregation Stages , Aggregation Operators and Expressions

  ### pipeline Stages 
  #### ($match $project ,$group $Sort, $limit ,$unwind ,$Skip etc...)
----
  ### PROJECTS -> Project 1
  #### Working with mongoDB NodeJS Driver (How to perform CURD Operations in real life Project) 
  ### Project 2
  #### Working with MongoDB and NodeJs 
---
  ##### All the above things will be Notify in further With notes and Codes ...

`Mongo DB was created by the company called 10gen , which is known as MongoDB ,.The company was founded by (Eliot Horowitz and Dwight Merriman ) in 2007 .The first version of Mongo Db Was released in 2009 . Mongo word was Extraced form Humongous `

 
 # 🌐 1 Chapter Introduction 

 1. what is MonoDB ? .
 MongoDB is a open-source , document-oriented NoSQL database managment system.
 Designed for flexibility ,scalability ,and performance in handling unstructured or semi-strucured data.

 2. SQL V/s MongoDB ?.
   
 **SQL-->**

   -> Sql databse are relational database .  
   -> They use Structured tables to store data in rows and columns  .  
   -> Sutable for applications with wll defined schemas and fixed datastructured.
   -> E-commerce Platform ,HR managment etc.

   As we mentioned in the above words,  SQL stands for structured.

This means that all the data has to be stored in a standardized manner. This is why tables have been created.

Tables are the simplest objects (structures) for data storage that exist in a database.

![table data](https://sqlbak.com/blog/wp-content/uploads/2014/01/tableee1.png)

  **MongoDB-->**

  -> NoSQL database are non-relational databse .
  -> They provide flexibility in data storage , allowing varied data types and structures .
  -> Ideal for application with dynamic or evolving data modules .
-> CMS social media platform , gamming etc...

MONOGODB store data in the form of document ( JSON ) it doesn't create any tables .


```
[
  {
    "id":"1",
    "brand":"BMW",
    "horsepower":"185",
    "color":"Blue"
  }
  {
    "id":"2",
    "brand":"Mercedes",
    "horsepower":"155",
    "color":"black"
  }
  {
    "id":"3",
    "brand":"Audi",
    "horsepower":"235",
    "color":"Red"
  }
]

```
 3.  ###🌐 Key Feature of MongoDB .
   
   * Flexibility Schema Design 
  
      * MongoDB allows dynamic, schema-less data structure .    
      * Easily accommodate changing data requiremnts .     

* Scalability and Performance 
  
    * Horizontal scalling supports large datasets and high traffic .
    * OPtimized read and write operations for fast Performance.
  
* Documnet-Oreanted Storage 
  
    * Data is stored in flexible ,JSON like BSON documents 
    * Self-contained units which rich data types and nested arrays .
  
* Dynamic Queries 
  
   * Rich Query language with support for complex queries .
   *  Utilize indexes to speed up query execution.

 * Aggregation Framwork
   
   * Performance advanced data transformation and analysis.
   * Process data using multiple Pipline stages.

* Open Source and Community

  * MonoDB is open source with a vibrant community .
  * Regular updates , improvments and supports.
  

  4. ### How MongoDB Works 
   We have FrontEnd ,BackEnd and who Works on both called FullStack WebDevloper.
   IN Fronend (HTML ,CSS ,JAVASCRIPT ) and its framwork(REACJS , NEXTJS ... )   and Backend (NODEJS ,EXPRESSJS NEXTJS PYTHON etc..)  ` eg : user request some data form  web page , then frontend data goes to the backend and backend request data from the server like monoDB or SQL , these should to connect with any backend to acess data from the server .  `

![ Server works](Screenshot%202023-08-20%20090956.png)

JSON V/S BSON
 * In MongoDB ,we write in json formate only but behind the scene data stored in BSON (Binary JSON ) formate , binary represention of JSON.
 * By utilizing BSON ,MongoDB can achieve higher read write speeds , reduced storage requirements ,and inproved data manipulaiton capabilties , maintaining performance efficiency .


 * json data 
  ```
 {"hello": "world"} → 

\x16\x00\x00\x00           // total document size
\x02                       // 0x02 = type String
hello\x00                  // field name
\x06\x00\x00\x00world\x00  // field value
\x00   

  ``` 

# Reqirement to work with mongoDB 
 4 . ## Installation of MongoDB

 * Installtion 
    * [MongoDB Community Server Download INSTALL MSI ](https://www.mongodb.com/try/download/community)
    * [MongoDB Shell Download install Msi ](https://www.mongodb.com/try/download/shell)
    * [MongoDB Command Line Database Tools Download ](https://www.mongodb.com/try/download/shell)

    * CMD Commands to check , have you installed right or Wrong 
   ```
   1. mongod --v 

   output for right installation 

   Build Info: {
    "version": "7.0.0",
    "gitVersion": "37d84072b5c5b9fd723db5fa133fb202ad2317f1",
    "modules": [],
    "allocator": "tcmalloc",
    "environment": {
        "distmod": "windows",
        "distarch": "x86_64",
        "target_arch": "x86_64"
    }
     }

    check Mongo Shell 
    cmd > mongosh 

    show database
    a. > show dbs
    admin   40.00 KiB
    config  72.00 KiB
    local   72.00 KiB


   ```

---
---
---

## Managing DataBase in MingoDb
### Ceating /Deleting Database .
### Ceating /Deleting Collections .


```
show dbs; 

show databases

use <database-name>; (creating new databse)

db.dropDatabase(); (to Delete Database)

show collections;

db represent current current database .

db.createCollection('collection-name');

db<collection-name>.drop();



```

` start server by cmd (mongosh)   `

`Note ->   You won't see a database listed in the output of the show dbs command untill that database contains at least one collection with data in it  `


# 🌐CURD OPERATION IN MONGODB

## Inserting document in mongodb 

* Inserting Document in mongoDB.
* When to use Quotes and when not to ?
* Ordered and Unorderd Insertion.
* Case Sensitivity in MongoDB.
  
```
  SYNTAX for insert one data 

  * db.<collection.name>.insertOne({
   field:value1,
   field:value2
  ...
  })

  SYNTAX for insert Many data 

  * db.<collection.name>.insertMany([{
   field:value1,
   field:value2
  ...
  },

  {
   field:value1,
   field:value2
  ...
  }
  //...
  ]
  )
```
   db.data.find() -> to show data inside inserted dataBase .


# 🌐where should we useQuotes and not use ?. 


   ` **Special Charater** [ If a field name contains character or spece ,or stars with a numeric digits, using quotes in necessary .]`


```
db.data.insertOne({'name':'rahul',age:19.6,address name:'ranchi'})

SyntaxError: Unexpected token, expected "," (1:51)

 db.data.insertOne({'name':'rahul',age:19.6,address name:'ranchi'}) 

address name instead of this , do 'address name" single and then double quotes 
```

   ` **Reserved words**  -<> if a reserved keywords in MongoDB , use Quotes distiguish it from the reserved keywords .`

---

## 🌐Orderd and unorderd insertion 
<p> When executing bulk write operations, "Orderd" and "unorderd " determine the batch behavious  </p>

#### 🌐Orderd Inserts
<p>Default behaviour is orderd where MongoDB stops on the first error .
db.<collection-name>.insertMany([doc,doc2 ,...])

` if somehow an error accured in doc2 or doc3 ,then before the doc2 or doc3 docs will be execute but after doc2-3 doesn't execute.`

</p>

#### 🌐Unorderd Inserts
<p>When executing bulk write operation with unorderd flag . MongoDB processing after encountering an error.
db.<collection-name>.insertMany([doc,doc2 ,...],{ordered : false});

`if error accured then all docs execute accept error docs.`
</p>

# 🌐Read Operations in MongoDB

 1. Reading Documents in MongoDB.
 2. Comarison Operator.
 3. Logical Operators.
 4. Cursors in MongoDB.
 5. Elements Operators

Finding Document in MongoDB

```
check for multiple properties and it gives all properties

find()
db.collection_name.find({key:value})

check for multiple properties 

findOne()
db.collection_name.findOne({key:value})

```


# 🌐importing JSON in MongoDB commands .
 🍁these commands are used for to import json file in own database.

```
 🍀 mongoimport.jsonfile.json -d database_name-c collection_name 
 ```

 ```
 {
  "name":"Rahul",
  "age":20
 }
 {
   "name":"abhi",
  "age":23
 }
 ```

``` 
 🍀 mongoimport products.json -d shop -c products.
 

  🍀 mongoimport products json -d shop -c products ***--jsonArray*** .
  
  ```

  ```
  [{
    "name":"rahul",
    "age":19
  },
  {
    "name":"kush",
    "age":36
  }
  ]

  use --json when you have data like array of an objects .

  Limit to import of 16MB or smaller
  ```
# 🌐 Export JSON

```
withot mongoshell start -> 

mongoExport -d shop -c sales -o E:/mongo/mongo/salestate.json 

mongoexport -d alreadyExist_Database -c collection_name filePath\filename

eg  :  mongoexport -d ds -c col -o C:\Users\rahul\OneDrive\Pictures\Desktop\MongoDB\fol\products.json

To look data of json file 
 1. Go to the databse .
 2. select that databse .
 3.insert this command .

✅db.collections_name.find();

```

# 🌐 Comparison Operator 
```
$eq (equals)
$ne (not equals)
$gt (greater than)
$gte (greater than equal to)
$lt (less than)
$lte (less than equal to)

$in ([123,21,34] give you only these three data ,depands how much you enterd in the array <$in as like come in for this data only .>)

$nin (not in )[all data will execute acept arrays data ]

```
```
🍀 db.collectionName.find('fieldName'{$operator:value })

✅db.collectionName.find({'price':{$eq:699 }})
❌ db.collectionName.find('price'{$eq:699})





🍀db.collectionName.find('price'{$eq:699 }).count() 


🍀 db.category({price{$in:[249,129,39]}})

```
# 🌐 Introduction to cursor

Cursors in MongoDB used to efficiently retrive large sets from quiers ,providing control over data retrival process .
<br/>

MongoDB retrives query result in batches using cursors . cursors are a pointer to the result set on the server . cursor are used to iterate through query result.

<strong> Automatic Batching </strong> : MongoDb returuves query result in batches one .
<br/>
default batch is usually 101 document. this improves memory efficiency 

# 🌐 cursor method

```
count() 
limit()
skip()
sort()
```

```
db.products.find({price:{$gt:250}}).count(); 

db.products.find({price:{$gt:250}}).limit(5); 

db.products.find({price:{$gt:250}}).skip(2); 

db.products.find({price:{$gt:250}}).limit(2).sort({price:1});

(1) for ascending and (-1) for descending  

```
db.products.find({price:{$gt:250}}).limit(5).skip(2); <br/>
skip 2 in limit 5 

# cursor method (caveats)
***Performance Implications***  <br/>
 
* skip()  can be inefficient for large offsets.
* Using sort() on large result sets may impact performance .

***Use with cautions***  <br/>
* be cautious when using limit() and skip() on large collections.
* Consider using indexing to optimize query performance .


# logical Operators

```
1>> $and  : Performs a logical and operatio on an array of expression , where all expression must be true for the document to match.

{$and[{condition1},{condition2},...]} ;

$or

$not

{field : {$not:{operator:value}}} ;

db.products.find({'price':{$not:{$eq:100}}}).count() both wrok same :
db.products.find({'price':{$ne:100}}).count()

 😉 $nor  acept this condition execute all data.
```
```
Q. Find products with price greater than 100 and name equal to "Diamond Ring"

 db.products.find({$and:[{'price':{$gt:100}},{name:"Diamond Ring"}]})

 db.products.find({$or:[{'price':{$gt:100}},{name:"Diamond Ring"}]})

```

# 🌍 Complex Expression 
### This is basically use for complex  situation.

<p>
The $exper operator allow using aggregation expression within a query.
Useful when you need to compare field from the same document in a more complex manner.
Atleast we need to know syntax.

Syntax:-
```
{$expr:{operator:{field,value}}}
```

$ is required 
<br/>
Example :-
``` 
db.products.find({$expr:{$gt:['$price',1340]}})

db.collections_name.find({$expr :{$operator : [ {asmd_Operaitons:['$val1',$val2] },$comparable_value]}})

shop> db.sales.find({$expr:{$gt: [ {$multiply : ['$quantity','$price']}, '$targetPrice']}   }  )
 ```
 for addition -> add
<p/>

# 🌍  Element Operator 

```
$exist , $type , $size

```


```

{field:{$exist:<boolean>}}
db.collections_name.find({price:{$exist:true}}).count()

{field:{$type:"<bson-data-type>"}}

{field:{$size:<array-length>}}

```
```
The BSON value can be one of the following :

1: Double
2:String
3:Object
4:Array
5:Binary data
6:Undefined 
7:Object id
8:Boolean 
9:Date 
10:Null
11: Regular expression
12:Javascript code

```

`
$size : the $size operator matches documents where the size of an array field matches a specified value.

[{},
{},
{},
[{},{},{}],
{}
]

`

db.collections_name.find({price:{$ exist:true},price:{$gt:1250}})
<br/>
is exists + is greater than 

# 🌍 Projections (Important )
<p>
db.collections_name.find({},{field1:1,field2:1}). <br/>
TO include specific field , use Projection with a value if a for the field you want. <br/>
To exclude field , use projection with a value of 0 for the field you want to execute. <br/>
You cannot include and exclude field simultaneously in the same query projections.
<p/>

# 🌍Embedded Documents 
#### dealing with Arrays and object
just use the dot notations.
<p>
Q 1: Find posts with comments by specific user (Array)  <br/>
Q 2: Find the document where the view in metadata field > 1200.(Objects)  <br/>
Q 3: we need to find out the document where the user in comments = henry and also in the  metadata likes value >50.  <br/>

Q 4: we need to return an somments array which must have this
(alice & vinod ) elements only in it . <br/>

we need to use $all operator . here the order doesn't matter.

### $all VS $ekemMatch

🍀The $all operator selects the documents where the value of a field is an array that contains all the specified elements .

🍃{ field: {$all:  [value1, value2,....] } }  

🍀The $eleMatch operator matches documents that contain an array field with at least one element that matches all the specified query ceriteria.

{field : {$eleMatch : {query1,query2, . . . . . . .} } } 

 db.comments.find({'comments':{$elemMatch:{'user':'Vinod','text':'Thanks for sharing.'}}}) <br/>
 * another way 
    
    * db.comments.find({"comments.user":"Alice","comments.text":"Awesome article"})

```[
  {},
  {}
 comments: [
      { user: 'Alice', text: 'Awesome article!' },
      { user: 'Vinod', text: 'Thanks for sharing.' }
    ],
    {}
]

if we need user and text both use elemMatch.
another way to do  time stamp 2:24:00

```
<p/>

# 🌍 Update Operations in MongoDB v.i.p
1. updateOne() and updatemany().
2. Removing and renaming fields.
3. Adding,removing items from array.
4. updating embedded documnets.
   
   ### 🌟updateOne() and updateMany()
   db.collection_name.***updateOne***(
    {filter},
    {$set:{existingField:newValue,newField:new_value,//....}}

   );

   db.collectionName.***updateMany***(
    {filter},
    {$set;{existingField:new_Value,//...} }
   )

## 🌟Removing and Renaming Field (to change FieldValue )

db.collection_name.updateOne({filter},{$unset:{fieldName}}); ==> ***for remove ***

``` 
eg:- db.products.updateMany({price: 899},{$unset:{'price':""}}) 

```

db.collections_name.updateMany({filter},{$rename:{oldFieldName:"newFieldName"}}); ==> ***rename***


### 🌟 Updating ARRAY and Embedded Documents 

🍀db.collections_name.updateOne(
  {filter},
  {$push:{arrayField:"new_value"}}
);

🍀db.collections_name.updateOne(
  {filter},
  {$pop:{arrayField:"value"}}
);

🍀db.collections_name.updateOne(
  {filter},
  {$set:{'arrayField. $ .txt': "update Txt"}}
); --> $ positional operator 

 db.comments.updateOne( {_id:4,'comments.user':"Alice"} , {$ set: {'comments.$.text':"Thankful! "} } )

# 🌍 Delete Operations in MongoDB.
In MongoDB , the delete Operations are used to remove documents from a collections . there are : 
two main method to perform deletion : 

```
deleteOne() and deleteMany()
```


```
db.colection_name.deleteOne({filter})

db.collection_name.deleteMany({filter})

eg:- db.sales.deleteMany({price:55});
```

# 🌍 Indexes in MongoDB.
Q. What is Indexes.? <br/>
Q. Benifits of Indexes !. <br/>
Q. Managing Indexes .  <br/>
Q. Unique , Text indexes . <br/>
Q. When not to use Indexes ?

### 🌟 What is Indexes ?.
<p>
Indexes are Specialized data structures that optimized data retrieval speed in MongoDB.  <br/>
a. Indexes store a fractions of data in a more searchable formate. <br/>
b. They enable MongoDB to locate data faster during queries. <br/>
c. Indexes are separate form collections and multiple indexes can exist per collections. <br/>
</p>

## 🌟  Benifits of Indexes .

1. Faster Querying : indexes drastically accelerate data retrival. particularly for large collections.
2. Efficient Sorting : Indexes facilities rapid sorting based on specific field.
3. Improved Aggregation : Aggregation operations become more efficient with optimized indixes.
4. Indexes on Multiple Field : complex queries executed efficiently by utilizing multiple field in indexes.
   
   ### ✔️ explain();
   <hr/>
   use explain() method to understand query execution in detail.

   db.products.find({name:'Air fryer'}).explain();

    db.products.find({name:'Air fryer'}).explain("executionStats");
            use it to measure the time taken to execute a query .
   <hr/>

   ## 🌟Managing Indexes ;
   1. db.products.createindex({field:1});
   
       a. (1) for storing indexes in ascending order .

       b. (-1) for storing indexes in Descending order .

   2. db.collection.getindexes();
   
      a.  _id is a default index.

REMOVING  

   3. db.collection.dropIndex({field:1});
   4.  db.collection.dropIndex('index_name')
   

    for check only  :-
    db.products.getIndexes()

## 🌟 Unique and Text Indexes . Homework 
```
db.products.createIndex({field:1},{unique:true})

db.collectio.createIndex({field:"text});

db.collection.find({$text:{$search:"keyword"}});

  🍀Searching using index is faster than $regex searching .
  🍀db.products.find({field:{$regex:"air"}})

```
### ✔️ When not to use index .

```
1. Indexes on Rarely Used Fields:
. Indexing fields that are seldom used in quieries used in quieries can consume unnecessary space and resource.

2. Balancing Act : 
.indexing requires disk space and memory . Overindexing can lead a resource strain and impact overall performance .

3. Indexing small Collections
.In smaller collections, the cost of index maintainance might outWeigh the benifits gained from quering .
```
  
#🌍 Aggregation

Q. What is Aggregation ?

🍀 Definition : Aggregation is the process of Performing transformations on documents and combining them to produce computed result.

🍀Pipline stages : Aggregation consists of multiple pipleine stages ,each perfoming a specific operation on the input data.

### 🍀🍀 BENIFITS

🍀 Aggregating Data Complex calcuation and operations are possible.
🍀 Advanced Transformations Data can be combined reshaped and computed for insights 
🍀 Efficient Processing Aggregation handling large dataset efficiently .

## 🌟 $match
🍀 The $match stage is similar to the query used as the first argument in find(). it filters documents based on specified conditions.

```
Syntax :
[{$match:{query}}]
 
example : 
db.products.aggregate([{$match:{ company: '64c23350e32f4a51b19b9231'}}]);

```
## 🌟 $group 
#### ( work as  a javascript reduceMethod , which wrap up in a single quantity.)
The $group stage group documents by specified field performs aggregation operations on grouped data .

```

{
  $group:{
    _id:expression, // grouped by

  field1:{accumulator:expression},
  ....
  }
}

eg:
db.products.aggregate([$group :{_id:{comp:"$company"},totalProducts:{$sum:1}}])

$avg for average ,

```


<button style="padding:1rem; font-size:1rem; border-radius:1rem; cursor:pointer">[👆Visit Here To Know About $group](https://www.mongodb.com/docs/manual/reference/operator/aggregation/group/#mongodb-pipeline-pipe.-group) </button>
```
{
  $group:
    {
      _id: <expression>, // Group key
      <field1>: { <accumulator1> : <expression1> },
      ...
    }
 }
 
```
EXAMPLES : -  
```
 db.products.aggregate([{$group:{_id:"$company",totalPrice:{$sum:"$price"}}}])
```
In Aggregate and expression $field is required.  
This group products by company and calculates the total number of products for each company.


Q. whose Price is > 900 
Add with comparison operator

```db.products.aggregate([

  {$match:{price:{$gt:900}}},

  {$group:{_id:"$company",totalPrice:{$sum:"$price"}}}

  ])
  ```


  Q. Find the Quantity =5 ,group them with same quantity abd find the average price.
  ```
  db.sales.aggregate([{$match:{quantity: 5}},{$group:{_id:'$quantity:',totatalPrice:{$sum:'$price'},averagePrice:{$avg:'$price'}}}])
  
  ```
## 🌟  sort()

use multiple aggregation 
```
([
  {$match:{}},

{$group:{}},

{$sort:{}}

])
```

## 🌟 $sort:

```

 db.sales.aggregate([{$match:{price:{$gt:120}}},{$group:{_id:'$quantity:',totatalPrice:{$sum:'$price'}}},{$sort:{totalPrice:1}}])

```

## 🌟 $project
this is alternate of projection But more advanced 

🍀 The $Project stage reshapes documents,include or excludes fields and performs operation on field 

{$project: {field1:expression,...}}

```
db.products.aggregate([


{$project :{name:1},discountPrice:{'$subtract':{"$price",5}}}

])

```

Projects the name field and calculates a discountedPrice field by substracting grom the price 
$sum , $subtract , $multiply etc... are the type of expression Operator .



