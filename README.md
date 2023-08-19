# Documentation
*Theme Name :* "Create An API for A Simple MBanking App"

*Author :* Sarra Nutrisia

*Created :* 18/08/2023 

*HTML Version :* HTML 5

*Node.js Version :* 18.17.0

*Express.js Version :* 4.18.0

*MySQL2 Version :* 3.6.0

*Dotenv Version :* 16.3.1

*Body-Parser Version :* 1.20.2

*DBeaver Version :* 23.1.4

*XAMPP Version :* 3.3.0

*Postman Version :* 10.17.2

***
API stands for application programming interface, which is a set of definitions and protocols for building and integrating application software. APIs let your product or service communicate with other products and services without having to know how they’re implemented. This can simplify app development, saving time and money. 
***

## Table of Contents
1. index.js
2. package.json
3. package-lock.json
4. .gitignore
5. README.md
6. Images (folder contain images)
   
   
***
## Syntax for Creating Database Table (MySQL)

MySQL is a well-known, free and open-source database application. Its high performance, ease of use and data security makes it a popular database solution. One of the most crucial processes in MySQL is creating tables to store and organize data. These are steps to creating database table in MySQL :

1. Install XAMPP into your computer and then start running MySQL App.
   
   ![RunningMySQL](Images/Running_MySQL_in_XAMPP.png)


2. Don't forget to install DBeaver and connect to MySQL such as below :
   
   ![ConnecttoMySQLwithDBeaver](Images/connect_to_database_mysql.png)

   ![ConnecttoMySQLwithDBeaver2](Images/Connection_settings.png)

   ![ConnecttoMySQLwithDBeaver3](Images/Connection_test.png)


3. After that, you can create a new database in MySQL such as below :
   
   ![CreateNewDatabase1](Images/Create_New_Database.png)

   ![CreateNewDatabase2](Images/Database_Name.png)


4. After database was done, you can insert table as you need. These are examples to create a table and insert 
   data with syntax :

   ![CreateTableWithSyntax1](Images/Create_New_Table.png)

   ![CreateTableWithSyntax2](Images/Naming_Table_User.png)

   ![CreateTableWithSyntax3](Images/Create_New_Column_Transaction_Table_user_id.png)

   ![CreateTableWithSyntax4](Images/Edit_Attribute_Column_Transaction_Table_id.png)

   ![CreateTableWithSyntax5](Images/New_Constraint_Primary_Key.png)

   ![CreateTableWithSyntax6](Images/Create_Constraint_For_Table_Transaction_id.png)

   ![CreateTableWithSyntax7](Images/Constraint_Success_Transaction_Table.png)

   ![CreateTableWithSyntax8](Images/Save_Column_Table_User.png)

   ![CreateTableWithSyntax9](Images/Persist_Changes_User_Table.png)

   ![CreateTableWithSyntax10](Images/Column_User_Table_After_Persist.png)

   ![CreateTableWithSyntax11](Images/Insert_Data_To_User_Table.png)

   ![CreateTableWithSyntax12](Images/Syntax_User_Table.png)

   ![CreateTableWithSyntax13](Images/How_To_Input_Syntax_Tb_User.png)

   ![CreateTableWithSyntax14](Images/Data_Insert_to_User_Table.png)

   ![CreateTableWithSyntax15](Images/Result_Insert_Data_User_Table.png)





***
## Succesfully Connecting the Database to Node.js Locally

1. The first step is to install MySQL and the MySQL module for Node.js. You can install MySQL using your package manager or download it from the official website. Once MySQL is installed, you can install the MySQL module for Node.js using the following command: " npm install mysql2 ".
   
2. Before connecting Node.js with MySQL, you need to create a MySQL database and table to store data.
   
3. To connect Node.js with MySQL, you need to create a connection object using the mysql module. The connection object contains the necessary information to connect to the MySQL database. Here’s an example of how to create a connection object:
![ConnectNodeWithMySQL](Images/Connect_Node_js_With_MySQL.png)

4. Once you have established a connection to the MySQL database, you can perform CRUD (Create, Read, Update, Delete) operations on the database using Node.js. Here’s an example of how to insert data into the transaction table:
![InsertDataIntoTransactionTable](Images/Insert_Data_Into_Table_Transaction.png)

Connecting Node.js with MySQL is a straightforward process that involves installing MySQL, creating a MySQL database and table, creating a connection object using the mysql module, and performing CRUD operations on the database. Node.js provides a powerful platform for building database-driven applications, and MySQL provides a reliable and scalable database management system for storing and managing data.

***





## The Deployment Link

You can access the REST API from Cyclic by click link: URL : (https://splendid-duck-bracelet.cyclic.cloud/), App Repo : (https://github.com/SarraNutrisia/week-9-SarraNutrisia).

The Deployment of this MBanking App is using Railway. 

![ConnectingMySQL](Images/ConnectMySQL_to_Railway_Database.png)

***

#### Theme by Sarra Nutrisia
If you have any other questions that aren't covered in the documentation, feel free to e-mail <sarra.nutrisia@gmail.com>.
