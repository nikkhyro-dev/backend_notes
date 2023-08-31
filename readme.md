## CHAPTER 1

Q. WHAT IS CLIENT AND SERVER ?

  ### 👥 what is client ?
In the context of the web, a web client is a client-side application used for connecting to a web server over HTTP. It is typically a web browser or web app which displays web pages received from the server and allows users to interact with the web server.
   <!-- ![working principal](https://elevatex.de/wp-content/uploads/2022/02/Frontend-vs.-Backend-ENG.png) -->
<img src="https://elevatex.de/wp-content/uploads/2022/02/Frontend-vs.-Backend-ENG.png" width="200" height="100">

### 📅 What is server ?
   A web server is a computer software and underlying hardware that accepts requests via HTTP (the network protocol created to distribute web content) or its secure variant HTTPS. It stores web server software and a website’s component files (for example, HTML documents, images, CSS stylesheets, and JavaScript files) and connects to the Internet to support physical data interchange with other devices connected to the web. .
    
  ![server](https://www.bing.com/th?id=OSK.HERO1JPfCba_3KD8zGAM819ua4o0mZnmzFA08nxytcM8BPg&pid=cdx&w=320&h=189&c=7)

## client/server Architecture 
#### ![](https://www.researchgate.net/profile/Trevor-Mudge/publication/221147997/figure/fig1/AS:339672459956226@1457995633431/A-Typical-3-Tier-Server-Architecture-Tier-1-Web-Server-Tier-2-Application-Server-Tier.png)

***API Testing*** 

API testing refers to the practice of testing application programming interfaces (APIs) directly and as part of the integration testing to determine if they meet expectations for functionality, reliability, performance, and security. Since APIs serve as the medium to connect different software systems, ensuring their robustness is crucial.

- There are 3 Api testing .
  1. GUI testing.
  2. Application server API testing .(API)
  3.  Databse Testing :

#### GUI Testing 
---
✅**GUI** (Graphical User Interface) testing is the process of testing a product's graphical interface to ensure it meets its design specifications. This kind of testing is focused on validating the user interface elements, such as buttons, menus, text boxes, labels, images, etc., in terms of their layout, functionalities, and behaviors.

Key aspects of GUI testing include:

✅***Elements Verification:*** Ensuring that all user interface elements are aligned, readable, and consistently styled. For instance, checking that all buttons of a specific type are of the same size and color.

✅***Usability Testing:*** Evaluating the user interface from a user's perspective to ensure it's intuitive, easy-to-use, and provides a good user experience.

✅***Functional Testing:*** Ensuring that all UI components (like buttons, links, etc.) function as expected. For instance, a button should trigger the appropriate action when clicked.

✅***Compatibility Testing:*** Verifying that the GUI appears and functions correctly across different devices, screen sizes, resolutions, and orientations.

✅**Boundary Value Testing:** Input fields often have boundaries. For instance, a password field might require between 8 and 16 characters. GUI testing would involve entering values at and around these boundaries to ensure correct behavior.

✅***Error Message Verification:*** Ensuring that appropriate error messages are displayed for invalid operations. For example, trying to submit a form without filling in mandatory fields should trigger a relevant error message.

✅***Color and Font Testing:*** Verifying that the fonts are readable and the color schemes are appropriately applied and accessible.

✅***Navigation Testing:*** Ensuring that all navigational elements, like menus and links, guide the user to the correct destination without any errors.

✅***Performance:*** Checking how the GUI performs under different conditions. For instance, does it remain responsive if a large data set is loaded?

✅***Localization and Internationalization:*** Ensuring the GUI is adapted correctly for different languages, regions, and cultures.

🧪*GUI testing can be performed both manually and using automated tools.* Manual GUI testing is usually done by testers who interact with the software as an end-user would. Automated GUI testing involves using tools and scripts to automate the interactions with the GUI and then validate the expected outcomes.

🧪***Popular GUI automation tools include Selenium, QTP (Quick Test Professional), and TestComplete.***

**Challenges of GUI Testing:**

🧪***Frequent Changes:*** GUI tends to change frequently during the development phase, which can make maintaining automated GUI tests challenging.

🧪***Variety of Screen Resolutions and Sizes:*** GUI might look and behave differently on different screens and devices, necessitating extensive compatibility testing.

🧪***Subjectivity:*** Some aspects of GUI testing, especially those related to aesthetics and user experience, can be subjective.
Despite these challenges, GUI testing is essential to ensure a positive user experience, which can significantly impact the success of a software product.

---
 ### ⚒️ Application Server Testing 🔴🔴🔴🔴

1. **Levels of Testing:**

**Unit Testing:** Ensuring individual endpoints work in isolation. <br/>

**Integration Testing:** Ensuring endpoints work when integrated with other system components.

2. **Test Types:**

✅**Functionality Testing:** Ensures the API works as intended. <br/>

✅**Reliability Testing:** Ensures the API provides a consistent and stable connection.<br/>

✅**Load Testing:** Ensures the API can handle a large number of calls.<br/>

✅**Stress Testing:** Test the API's behavior under extreme conditions.<br/>

✅**Security Testing:** Ensures that the API has protection against possible threats.<br/>

✅**Data Validation Testing:** Checks the integrity and validity of the data passing through the API.<br/>

✅**Negative Testing:** Deliberately send incorrect data to see how the API handles it.<br/>

✅**Endpoint Deprecation Testing:** Ensures that deprecated endpoints don't break the system and respond appropriately.


✅**Tools:** There are many tools available to assist in API testing. Some of the popular ones include Postman, SoapUI, Rest-Assured, and JMeter.

### 🧪**Manual vs. Automated Testing:**

🧪**Manual:** Testers manually execute the API with the required set of inputs and observe the outputs.
Automated: Testing scripts are created, and tools are used to send a series of requests to the API and validate the results.
Challenges:

🧪**Parameter Selection:** Choosing the right set of parameters can be challenging.
Call Sequencing: Ensuring calls are made in the correct sequence, especially when endpoints have dependencies.
Output Validation: Depending on the response type (XML, JSON, etc.), validating outputs can be tricky.
Benefits:

🧪**Early Bug Detection:** Catching issues before they become bigger problems during UI testing or in production.
Ease of Integration: Ensuring APIs work correctly makes the integration of different systems smoother.

🧪**Time Efficiency:** Automated API tests can be much quicker than UI tests.
Overall, API testing is essential in the modern software landscape, where many applications are composed of numerous services that communicate over APIs. It helps in ensuring that the software performs correctly, efficiently, and securely when accessed programmatically.

---

**Here is a catch** Application server is the main or Important server where all the business ideas written and if it crashed then we lost all connection to the frontend and backend  

---
### DATABASE TESTING 

 Database testing for NoSQL databases is a bit different from relational database testing due to the distinct structures, purposes, and functionalities of NoSQL databases. NoSQL databases include document-based, key-value stores, column-based, and graph databases. Popular NoSQL databases include MongoDB, Cassandra, Redis, Couchbase, and Neo4j.

### When testing NoSQL databases, consider the following aspects:

✅***Data Validation Testing:*** Since NoSQL databases often don't enforce a strict schema (like RDBMS), it's crucial to validate that the application logic ensures the consistency and validity of stored data.

✅***Data Integrity Testing:*** While NoSQL databases might not have typical foreign key constraints like in RDBMS, you still need to ensure data relationships and integrity are maintained as per the application's requirements.

***⚒️Performance Testing:***

🧪***Load Testing:*** Given the distributed nature of many NoSQL databases, it's vital to assess the database's behavior under specific loads.

🧪***Stress Testing:*** Identify the breaking points of the database.

🧪***Scalability Testing:*** One of the main reasons companies choose NoSQL databases is their scalability. Test the database's capability to scale out, especially if it's a distributed system.

🧪***Failover and Recovery Testing:*** Many NoSQL databases are distributed and promise high availability. It's essential to test how the database handles node failures and how it recovers.

🧪***Concurrency Testing:*** NoSQL databases often provide eventual consistency. Testing should ensure that the database behaves as expected when multiple users access data concurrently.

🔐***Security Testing:***

Testing user roles and permissions.
Testing for injection attacks, especially for databases that use a query language.
Ensuring data at rest and in transit is encrypted if required.

🔐***Backup/Restore Testing:*** It's crucial to ensure that backup processes complete successfully and that the data can be fully restored from these backups.

🔐***Migration Testing:*** If moving data between systems or changing the structure within the NoSQL database, it's vital to ensure that the migration is successful and no data is lost.

🔐***Query Testing:*** For NoSQL databases that use a query language or an API for data retrieval, it's important to ensure these queries return the correct data and perform well.

🔐***Data Eviction Testing:*** For databases like Redis, which might evict data based on certain policies (e.g., least recently used), you should test that the eviction process works correctly.

⚒️**Tools for NoSQL Database Testing:**

⚒️***Native Database Tools:*** Most NoSQL databases come with their own set of tools for data querying and management. For instance, MongoDB has the MongoDB Shell.
⚒️***JMeter:*** Apache JMeter supports performance testing for some NoSQL databases.
⚒️***NoSQLUnit:*** It is a JUnit extension that helps with NoSQL database testing.

😞***Challenges in NoSQL Database Testing:***

Lack of Standardization: Unlike SQL databases that have more standardized structures and query languages, NoSQL databases can be very diverse.

😞***Eventual Consistency:*** Some NoSQL databases operate on eventual consistency, which means data might not be immediately consistent across all nodes. This can pose challenges when verifying data immediately after operations.

😞***Complex Setups:*** Some NoSQL databases, especially distributed ones, can have complex configurations and setups which need to be accurately replicated in testing environments.
Despite the challenges, ensuring the robustness of NoSQL databases through rigorous testing is crucial, especially given the critical role they play in many modern, scalable applications.


---

### Q. What is API (work on Business ideas)?

- API stands for Application Programming Interface .
- it enables communication and data exchange between two sepreate software system.
- A software system implementing API contains **functions/sub-routing** which can be executed by another software .

### what is Web server ?

Imagine you're at a restaurant. You, the customer, want to eat a meal, but you don't cook the food yourself. Instead, you give your order to a waiter, who then takes it to the kitchen. The chef prepares the meal, and the waiter brings it back to you. In this scenario, the kitchen acts like a "service provider" and the waiter functions as a "messenger" connecting you to the kitchen.

In the world of technology, a "web service" functions similarly to our kitchen in the restaurant. It’s a system designed to support communication between two electronic devices over the internet. When one device, say your computer, wants specific information or a service, it sends a request over the internet. A web service (just like our kitchen) processes the request and sends back the desired data or result.

Here are a few key points about web services:

***Platform Independent:*** Just as our waiter can serve any table regardless of who's sitting there, web services can be accessed by any computer or software regardless of the programming language or platform they use.

***Communication:*** Web services use standard protocols like HTTP and formats like XML or JSON (a type of language that computers understand) to send and receive messages.

**Two Major Types:**

***SOAP (Simple Object Access Protocol):*** A protocol that uses XML as its message format.
REST (Representational State Transfer): Uses standard HTTP methods and can work with multiple message formats, including XML, JSON, HTML, and more.
***Usage:*** Web services allow different applications to talk to each other. For example, when you check the weather on an app, it uses a web service to fetch the data from a central weather database.

In summary, web services are like the kitchens of the internet, processing orders and sending back results. They let different software systems communicate and share data, making our digital world connected and efficient.








