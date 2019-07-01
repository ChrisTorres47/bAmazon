DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (50) NOT NULL,
department_name VARCHAR (40) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (id) 
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("LED Gloves", "Rave gear", 49.99, 40), ("Poi","Rave gear", 89.99, 20),("Headphones",
"Electronics", 24.99, 100), ("Xbox One", "Video Games", 249.99, 10), ("Overwatch", "Video Games",
59.99, 80), ("Halo 5", "Video Games", 59.99, 80), ("TCL Television", "Electronics", 299.99, 15),
("Fortnite Game Pass", "Video Games", 19.99, 50), ("Last of us", "Video Games", 59.99, 80),
("Cargo Shorts", "Clothing", 26.99, 15)