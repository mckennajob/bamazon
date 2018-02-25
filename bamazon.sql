CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER NOT NULL AUTO_INCREMENT , 
    product_name VARCHAR(30) NOT NULL ,
	department_name VARCHAR(30) ,
    price INTEGER(10),
    stock_quantity INTEGER (100),
    
    PRIMARY KEY(item_id)

);

SELECT item_id, product_name, department_name, price, stock_quantity
FROM products;


INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUE ('White Paper', 'Office Supplies', 5, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUE ('Hair Brush', 'Beauty', 10, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUE ('Apple', 'Produce', 1, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUE ('Chair', 'Furniture', 75, 4);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUE ('Dress', 'Womens Clothing', 45, 1);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUE ('Jeans', 'Mens Clothing', 50, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUE ('Lysol', 'Cleaning Supplies', 3, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUE ('Wig', 'Beauty', 100, 2);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUE ('Mop', 'Cleaning Supplies', 5, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUE ('Scarf', 'Accessories', 20, 20);

