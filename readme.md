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

 
 # 1 Chapter Introduction 

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
 3.  ### Key Feature of MongoDB .
   
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


# CURD OPERATION IN MONGODB

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


# where should we useQuotes and not use ?. 


   ` **Special Charater** [ If a field name contains character or spece ,or stars with a numeric digits, using quotes in necessary .]`


```
db.data.insertOne({'name':'rahul',age:19.6,address name:'ranchi'})

SyntaxError: Unexpected token, expected "," (1:51)

 db.data.insertOne({'name':'rahul',age:19.6,address name:'ranchi'}) 

address name instead of this , do 'address name" single and then double quotes 
```

   ` **Reserved words**  -<> if a reserved keywords in MongoDB , use Quotes distiguish it from the reserved keywords .`

---

## Orderd and unorderd insertion 
<p> When executing bulk write operations, "Orderd" and "unorderd " determine the batch behavious  </p>

#### Orderd Inserts
<p>Default behaviour is orderd where MongoDB stops on the first error .
db.<collection-name>.insertMany([doc,doc2 ,...])

` if somehow an error accured in doc2 or doc3 ,then before the doc2 or doc3 docs will be execute but after doc2-3 doesn't execute.`

</p>

#### Unorderd Inserts
<p>When executing bulk write operation with unorderd flag . MongoDB processing after encountering an error.
db.<collection-name>.insertMany([doc,doc2 ,...],{ordered : false});

`if error accured then all docs execute accept error docs.`
</p>

# Read Operations in MongoDB

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


# importing JSON in MongoDB commands .
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
# Export JSON

```
mongoExport -d shop -c sales -o E:/mongo/mongo/salestate.json 
```

# Comparison Operator 
```
$eq equals
$ne 
$gt
$gte
$lt
$lte
$in
$nin

```
```
db.collectionName.find('fieldName'{$operator:value })
🍀db.collectionName.find('price'{$eq:699 })
```