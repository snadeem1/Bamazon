CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL,
  product_name VARCHAR(45) not NULL,
  department_name VARCHAR(45) not NULL,
  price DECIMAL(10,4) not NULL,
  stock_quantity INT not null,
  primary key (item_id)
);
