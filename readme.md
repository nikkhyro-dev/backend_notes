<!-- Markup :  # Heading 1 #
**Strong text**
 [Named Link](http://www.google.fr/ "Named link title") and http://www.google.fr/ or <http://example.com/>
`code()`
[ ] An uncompleted task
[X] An uncompleted task
  > Blockquote
          >> Nested Blockquote
Markup : ![picture alt](http://via.placeholder.com/200x150 "Title is optional") -->

### Mongo BD Notes

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

  
   
