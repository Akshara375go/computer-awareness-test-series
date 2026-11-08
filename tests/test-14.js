/* TEST 14 — Database Concepts (50 MCQs)
   Sub-topics: DBMS Basics, Keys, Relational Model, SQL, ER Model & Normalization, Transactions, MS Access
   type: match | stmt | pair | direct | real | misc
   a   : index of correct option (0 = a, 1 = b, 2 = c, 3 = d)
*/
window.TEST_DATA = {
  title: "Database Concepts",
  questions: [
  {"type":"stmt","topic":"ER Model & Normalization","q":"Consider the following statements:\n1. An entity is a real-world object about which data is stored.\n2. An attribute is a property of an entity.\n3. A relationship connects entities.\n4. In an ER diagram, an entity is shown by a diamond.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":0,"e":"An entity is shown by a rectangle; a diamond shows a relationship. Only statement 4 is not correct."},

  {"type":"stmt","topic":"SQL","q":"Consider the following statements:\n1. CREATE, ALTER and DROP are DDL commands.\n2. INSERT is a DDL command.\n3. DDL commands define the structure of database objects.\nWhich of the statements given above is/are correct?","o":["1 and 3 only","1 and 2 only","2 and 3 only","1, 2 and 3"],"a":0,"e":"INSERT is a DML command. Statement 2 is wrong."},

  {"type":"match","topic":"SQL","q":"Match the SQL keyword (List I) with its purpose (List II):","l":["WHERE","ORDER BY","GROUP BY","DISTINCT"],"r":["Removes duplicate values","Filters the rows","Groups rows having the same values","Sorts the result"],"o":["A-4, B-2, C-3, D-1","A-2, B-4, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1"],"a":1,"e":"SQL clauses: WHERE – Filters the rows; ORDER BY – Sorts the result; GROUP BY – Groups rows having the same values; DISTINCT – Removes duplicate values."},

  {"type":"pair","topic":"DBMS Basics","q":"Choose the INCORRECTLY matched pair:","o":["DBMS – Database Management System","RDBMS – Relational Data Backup Management System","SQL – Structured Query Language","DBA – Database Administrator"],"a":1,"e":"RDBMS stands for Relational Database Management System."},

  {"type":"misc","topic":"DBMS Basics","q":"Arrange the following in order from the smallest to the largest unit of data:\nA. Record\nB. Database\nC. Field\nD. File (table)","o":["A, C, D, B","C, A, B, D","C, A, D, B","C, D, A, B"],"a":2,"e":"Field → Record → File (table) → Database."},

  {"type":"real","topic":"Keys","q":"In a school's STUDENT table, which field is the best choice for the primary key?","o":["Student name","Age","Roll number","Class"],"a":2,"e":"Roll number is unique for every student. Names, ages and classes can repeat."},

  {"type":"stmt","topic":"Transactions","q":"Consider the following statements:\n1. A transaction is a logical unit of work.\n2. Atomicity means all operations of a transaction are done or none.\n3. Consistency means the database moves from one invalid state to another.\n4. Isolation means transactions freely change each other's data.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"Consistency keeps the database valid, and isolation prevents transactions from interfering. Statements 1 and 2 are correct."},

  {"type":"stmt","topic":"Keys","q":"Consider the following statements:\n1. A candidate key can be chosen as the primary key.\n2. A composite key uses more than one column.\n3. A primary key can be NULL.\n4. A foreign key links two tables.\nWhich of the statements given above is NOT correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":2,"e":"A primary key can never be NULL. Statement 3 is wrong."},

  {"type":"match","topic":"Transactions","q":"Match the ACID property (List I) with its meaning (List II):","l":["Atomicity","Consistency","Isolation","Durability"],"r":["Database remains in a valid state","Committed changes are permanent","All operations are completed or none","Transactions do not interfere with each other"],"o":["A-3, B-1, C-4, D-2","A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-4, C-1, D-2"],"a":0,"e":"ACID properties: Atomicity – All operations are completed or none; Consistency – Database remains in a valid state; Isolation – Transactions do not interfere with each other; Durability – Committed changes are permanent."},

  {"type":"misc","topic":"SQL","q":"Which one is different from the others?","o":["INSERT","CREATE","UPDATE","DELETE"],"a":1,"e":"INSERT, UPDATE and DELETE are DML commands. CREATE is a DDL command."},

  {"type":"real","topic":"Transactions","q":"During a bank transfer, the money is taken from account A but a power failure stops it being added to account B. The database should undo the whole transfer. Which transaction property ensures this?","o":["Atomicity","Durability","Isolation","Normalization"],"a":0,"e":"Atomicity means a transaction is done completely or not at all."},

  {"type":"stmt","topic":"DBMS Basics","q":"Consider the following statements:\n1. A record is a collection of related fields.\n2. A field is the smallest named unit of data in a table.\n3. A file (table) is a collection of related records.\n4. A database cannot contain more than one table.\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":2,"e":"A database can contain many tables. Statement 4 is wrong."},

  {"type":"direct","topic":"SQL","q":"SQL stands for","o":["Structured Question Language","Structured Query Language","Simple Query Logic","Sequential Query Language"],"a":1,"e":"SQL is the standard language for relational databases."},

  {"type":"match","topic":"SQL","q":"Match the SQL function (List I) with its result (List II):","l":["COUNT","SUM","AVG","MIN"],"r":["Smallest value","Number of rows","Total of the values","Average of the values"],"o":["A-3, B-2, C-4, D-1","A-2, B-3, C-4, D-1","A-2, B-3, C-1, D-4","A-2, B-4, C-3, D-1"],"a":1,"e":"Aggregate functions: COUNT – Number of rows; SUM – Total of the values; AVG – Average of the values; MIN – Smallest value."},

  {"type":"stmt","topic":"ER Model & Normalization","q":"Consider the following statements about normalization:\n1. Normalization increases data redundancy.\n2. Normalization divides large tables into smaller related tables.\n3. In First Normal Form (1NF) each cell holds a single (atomic) value.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":2,"e":"Normalization reduces redundancy. Statement 1 is wrong."},

  {"type":"stmt","topic":"SQL","q":"Consider the following statements:\n1. SQL stands for Structured Query Language.\n2. SQL is used to communicate with relational databases.\n3. SQL keywords such as SELECT are not case-sensitive.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":3,"e":"All three statements are correct."},

  {"type":"real","topic":"SQL","q":"The administrator wants to give a clerk permission to read data from a table. Which SQL command is used?","o":["REVOKE","ROLLBACK","DROP","GRANT"],"a":3,"e":"GRANT gives privileges to users; REVOKE takes them back."},

  {"type":"pair","topic":"Relational Model","q":"Choose the correctly matched pair:","o":["Degree – Number of rows","Cardinality – Number of rows","Cardinality – Number of columns","Domain – Number of tables"],"a":1,"e":"Cardinality is the number of rows. Degree is the number of columns, and a domain is the set of allowed values."},

  {"type":"match","topic":"Relational Model","q":"Match the term (List I) with its other name or meaning (List II):","l":["Row","Column","Number of columns","Number of rows"],"r":["Degree","Cardinality","Field (attribute)","Record (tuple)"],"o":["A-4, B-3, C-1, D-2","A-3, B-4, C-1, D-2","A-4, B-3, C-2, D-1","A-4, B-1, C-3, D-2"],"a":0,"e":"Table terminology: Row – Record (tuple); Column – Field (attribute); Number of columns – Degree; Number of rows – Cardinality."},

  {"type":"direct","topic":"Relational Model","q":"The relational model of databases was proposed by","o":["E.F. Codd","Peter Chen","Tim Berners-Lee","Bill Gates"],"a":0,"e":"E.F. Codd of IBM proposed the relational model in 1970."},

  {"type":"pair","topic":"SQL","q":"Choose the correctly matched pair:","o":["INSERT – DDL command","GRANT – TCL command","COMMIT – DML command","CREATE – DDL command"],"a":3,"e":"CREATE is DDL. INSERT is DML, GRANT is DCL, and COMMIT is TCL."},

  {"type":"stmt","topic":"Transactions","q":"Consider the following statements:\n1. COMMIT saves the changes of a transaction permanently.\n2. ROLLBACK undoes the changes that are not yet committed.\n3. COMMIT and ROLLBACK are DDL commands.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 3 only","1, 2 and 3","1 and 2 only"],"a":3,"e":"COMMIT and ROLLBACK are TCL (transaction control) commands. Statement 3 is wrong."},

  {"type":"stmt","topic":"DBMS Basics","q":"Consider the following statements:\n1. An index speeds up searching of data.\n2. A view is a virtual table based on a query.\n3. NULL means no value and is not the same as zero.\n4. A data dictionary stores metadata (data about data).\nHow many of the statements given above are correct?","o":["Only one","Only two","Only three","All four"],"a":3,"e":"All four statements are correct."},

  {"type":"pair","topic":"SQL","q":"Choose the INCORRECTLY matched pair:","o":["COUNT – Number of rows","MAX – Highest value","AVG – Average of the values","MIN – Sum of the values"],"a":3,"e":"MIN gives the smallest value. SUM gives the total."},

  {"type":"match","topic":"ER Model & Normalization","q":"Match the ER diagram symbol (List I) with what it represents (List II):","l":["Rectangle","Ellipse (oval)","Diamond","Line"],"r":["Relationship","Entity","Link between the symbols","Attribute"],"o":["A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-1, C-4, D-3"],"a":2,"e":"ER diagram symbols: Rectangle – Entity; Ellipse (oval) – Attribute; Diamond – Relationship; Line – Link between the symbols."},

  {"type":"match","topic":"DBMS Basics","q":"Match the data item (List I) with its description (List II):","l":["Field","Record","Table (file)","Database"],"r":["Collection of related tables","Single piece of data such as a name","Collection of related records","Collection of related fields"],"o":["A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1","A-2, B-4, C-3, D-1"],"a":3,"e":"Data hierarchy: Field – Single piece of data such as a name; Record – Collection of related fields; Table (file) – Collection of related records; Database – Collection of related tables."},

  {"type":"misc","topic":"DBMS Basics","q":"Which of the following is NOT a DBMS software?","o":["MySQL","Linux","Oracle","MS Access"],"a":1,"e":"Linux is an operating system. MySQL, Oracle and MS Access are database management systems."},

  {"type":"stmt","topic":"DBMS Basics","q":"Consider the following advantages of a DBMS:\n1. It reduces data redundancy.\n2. It improves data security through access control.\n3. It allows data to be shared among many users.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1, 2 and 3","1 and 3 only"],"a":2,"e":"All three statements are correct."},

  {"type":"stmt","topic":"Keys","q":"Consider the following statements about the foreign key:\n1. A foreign key must always be unique in its own table.\n2. A foreign key refers to the primary key of another table.\n3. Foreign keys are used to create relationships between tables.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":2,"e":"A foreign key may repeat in its own table (many orders can belong to one customer). Statement 1 is wrong."},

  {"type":"direct","topic":"Keys","q":"A key that uniquely identifies each record in a table is called the","o":["Primary key","Foreign key","Sort key","Search key"],"a":0,"e":"The primary key uniquely identifies every record and cannot be NULL."},

  {"type":"misc","topic":"DBMS Basics","q":"Which of the following is NOT an advantage of a DBMS?","o":["Increased data redundancy","Data sharing","Data security","Data integrity"],"a":0,"e":"A DBMS reduces redundancy rather than increasing it."},

  {"type":"stmt","topic":"DBMS Basics","q":"Consider the following statements:\n1. The hierarchical model uses a tree structure.\n2. The relational model uses tables.\n3. The network model stores data in a single flat file.\n4. The object-oriented model has no objects.\nHow many of the statements given above are NOT correct?","o":["Only one","Only two","Only three","All four"],"a":1,"e":"The network model uses a graph structure, and the object-oriented model stores data as objects. Statements 3 and 4 are not correct."},

  {"type":"match","topic":"SQL","q":"Match the SQL command (List I) with its category (List II):","l":["CREATE","INSERT","GRANT","COMMIT"],"r":["DCL","DDL","TCL","DML"],"o":["A-2, B-4, C-1, D-3","A-4, B-2, C-1, D-3","A-2, B-4, C-3, D-1","A-2, B-1, C-4, D-3"],"a":0,"e":"SQL command categories: CREATE – DDL; INSERT – DML; GRANT – DCL; COMMIT – TCL."},

  {"type":"pair","topic":"SQL","q":"Choose the INCORRECTLY matched pair:","o":["INSERT – DML command","GRANT – DCL command","SELECT – DDL command","ROLLBACK – TCL command"],"a":2,"e":"SELECT retrieves data and is not a DDL command."},

  {"type":"real","topic":"SQL","q":"A teacher wants to see only the students who scored more than 80 marks. Which SQL clause is used?","o":["ORDER BY","WHERE","GROUP BY","DISTINCT"],"a":1,"e":"WHERE filters the rows that satisfy a condition."},

  {"type":"stmt","topic":"DBMS Basics","q":"Consider the following statements:\n1. A database is an organised collection of related data.\n2. A DBMS is software used to create and manage databases.\n3. DBMS stands for Data Backup Management System.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 2 only","1 and 3 only","1, 2 and 3"],"a":1,"e":"DBMS stands for Database Management System. Statement 3 is wrong."},

  {"type":"real","topic":"Keys","q":"In a library database, the ISSUE table has a MemberID column that refers to the MEMBERS table. This column is a","o":["Foreign key","Sort key","Index key","Master key"],"a":0,"e":"A column that refers to the primary key of another table is a foreign key."},

  {"type":"match","topic":"Keys","q":"Match the key (List I) with its meaning (List II):","l":["Primary key","Foreign key","Composite key","Candidate key"],"r":["Any column that is eligible to be the primary key","Uniquely identifies each record","Key made of more than one column","Refers to the primary key of another table"],"o":["A-4, B-2, C-3, D-1","A-2, B-4, C-1, D-3","A-2, B-3, C-4, D-1","A-2, B-4, C-3, D-1"],"a":3,"e":"Types of keys: Primary key – Uniquely identifies each record; Foreign key – Refers to the primary key of another table; Composite key – Key made of more than one column; Candidate key – Any column that is eligible to be the primary key."},

  {"type":"match","topic":"MS Access","q":"Match the MS Access object (List I) with its use (List II):","l":["Table","Query","Form","Report"],"r":["Screen for entering data","Formatted output for printing","Retrieves data that meets given criteria","Stores the data"],"o":["A-3, B-4, C-1, D-2","A-4, B-3, C-2, D-1","A-4, B-1, C-3, D-2","A-4, B-3, C-1, D-2"],"a":3,"e":"MS Access objects: Table – Stores the data; Query – Retrieves data that meets given criteria; Form – Screen for entering data; Report – Formatted output for printing."},

  {"type":"stmt","topic":"MS Access","q":"Consider the following statements about MS Access:\n1. The default file extension of Access 2007 and later is .accdb.\n2. A Form is used for printing reports.\n3. A Query is used to store data permanently.\n4. A Report is used to enter data into tables.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":0,"e":"Forms are for data entry, tables store data, and reports give formatted output. Only statement 1 is correct."},

  {"type":"real","topic":"DBMS Basics","q":"A school stores a student's address in five different tables. When the address changes, only two tables are updated. This problem is called","o":["Data inconsistency","Data independence","Normalization","Data security"],"a":0,"e":"Repeated (redundant) data that is not updated everywhere becomes inconsistent."},

  {"type":"pair","topic":"Keys","q":"Choose the correctly matched pair:","o":["Foreign key – Cannot link tables","Candidate key – Always NULL","Composite key – Uses one column only","Primary key – Uniquely identifies a record"],"a":3,"e":"The primary key uniquely identifies each record. A foreign key links tables, a candidate key is eligible to be the primary key, and a composite key uses several columns."},

  {"type":"stmt","topic":"Relational Model","q":"Consider the following statements:\n1. The relational model was proposed by E.F. Codd.\n2. The relational model was proposed by Charles Babbage.\n3. In the relational model, data is stored in tables.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],"a":2,"e":"E.F. Codd of IBM proposed the relational model in 1970. Statement 2 is wrong."},

  {"type":"stmt","topic":"Keys","q":"Consider the following statements about the primary key:\n1. It uniquely identifies each record in a table.\n2. It can contain NULL values.\n3. A table can have only one primary key.\nWhich of the statements given above is/are correct?","o":["1 and 2 only","1 and 3 only","2 and 3 only","1, 2 and 3"],"a":1,"e":"A primary key cannot be NULL. A table has one primary key, which may be made of several columns. Statement 2 is wrong."},

  {"type":"real","topic":"SQL","q":"A clerk wants a list of class names from a student table without repeating any class. Which keyword should be used with SELECT?","o":["ORDER BY","DISTINCT","UPDATE","DROP"],"a":1,"e":"DISTINCT removes duplicate values from the result."},

  {"type":"stmt","topic":"Relational Model","q":"Consider the following statements:\n1. The rows of a table are also called records.\n2. The columns of a table are also called fields.\n3. The number of rows in a table is called its degree.\nWhich of the statements given above is/are correct?","o":["2 and 3 only","1 and 3 only","1, 2 and 3","1 and 2 only"],"a":3,"e":"Degree is the number of columns; the number of rows is the cardinality. Statement 3 is wrong."},

  {"type":"misc","topic":"SQL","q":"Which of the following is NOT an SQL aggregate function?","o":["SORT","COUNT","SUM","AVG"],"a":0,"e":"COUNT, SUM, AVG, MAX and MIN are aggregate functions. Sorting is done with ORDER BY."},

  {"type":"real","topic":"MS Access","q":"A clerk wants a neatly formatted printout of student marks from an MS Access database. Which object should be used?","o":["Form","Macro","Report","Table"],"a":2,"e":"A Report presents data in a formatted layout for printing."},

  {"type":"match","topic":"DBMS Basics","q":"Match the data model (List I) with its structure (List II):","l":["Hierarchical","Network","Relational","Object-oriented"],"r":["Graph with many parent–child links","Data stored as objects","Tree structure","Tables of rows and columns"],"o":["A-1, B-3, C-4, D-2","A-3, B-1, C-2, D-4","A-3, B-1, C-4, D-2","A-3, B-4, C-1, D-2"],"a":2,"e":"Data models: Hierarchical – Tree structure; Network – Graph with many parent–child links; Relational – Tables of rows and columns; Object-oriented – Data stored as objects."},

  {"type":"stmt","topic":"SQL","q":"Consider the following statements:\n1. DELETE is a DDL command.\n2. TRUNCATE removes the table structure and the data permanently.\n3. SELECT is used to modify existing data.\n4. UPDATE is used to modify existing records.\nWhich of the statements given above is correct?","o":["Only 1","Only 2","Only 3","Only 4"],"a":3,"e":"DELETE is DML, TRUNCATE removes all rows but keeps the table structure, and SELECT retrieves data. Only statement 4 is correct."}
  ]
};
