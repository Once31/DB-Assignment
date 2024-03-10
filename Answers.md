1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
> The "Product" and "Product_Category" tables are related to each other by Many to One relationship were "PRIMARY KEY" of "Product_Category" table goes into "Product" table as a "FOREIGN KEY". 

2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
> For SQL database we can enforce referential integrity through the use of foreign key constraint. In "Product" table we will store "PRIMARY KEY" of "Product_Category" table as a "FOREIGN KEY".
> For NOSQL database(MongoDB) we will store ObjectID of "Product_Category" document in "Product" document. For validating category we have to check if category ObjectID exists in "Product_category" table. 