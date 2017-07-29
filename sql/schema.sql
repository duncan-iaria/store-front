CREATE DATABASE snoodfood_db;
USE snoodfood_db;

DROP TABLE IF EXISTS products;
CREATE TABLE products
(
	id INTEGER( 11 ) AUTO_INCREMENT NOT NULL,
    name VARCHAR( 30 ),
	deptartment VARCHAR( 30 ),
    price DECIMAL( 6, 2 ),
    quantity INTEGER( 20 ),
    PRIMARY KEY( id )
);

INSERT INTO products ( name, deptartment, price, quantity )
VALUES( "Meal Kit Steak", "Meal Kits", 28.99, 300 ), ( "Meal Kit Chicken", "Meal Kits", 25.99, 500 ), 
(  "Meal Kit Tofu", "Meal Kits", 24.99, 150 ), ( "Onion", "Groceries", .99, 300 ),
( "Tomato", "Groceries", 1.99, 100 ), ( "Cheese", "Groceries", 5.99, 30 );
