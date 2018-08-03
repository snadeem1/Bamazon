CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
  id INT NOT NULL,
  product_name VARCHAR(45) not NULL,
  department_name VARCHAR(45) not NULL,
  price DECIMAL(10,4) not NULL,
  stock_quantity INT not null,
  primary key (id)
);
INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (1, "Bracelet", "Jewelry", 15.99, 40);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (2, "Top", "Clothing", 5.99,	23);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (3, "Iphone", "Electronics", 500.54, 34);


INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (4,	"USB cable",	"Electronics",	12.65,	78);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (5,	"Redkin shampoo",	"Hair care",	40.98,	12);


INSERT INTO products (id, product_name, department_name, price, stock_quantity)
values (6,	"Gucci Perfume",	"Fragrance",	286.65,	10);


INSERT INTO products (id, product_name, department_name, price, stock_quantity)
values (7,	"Guitar",	"Instrument",	50.89,	5);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (8,	"Wall clock",	"Home décor",	25.67,	16);


INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (9,	"Coach watch",	"Accessories",	350.98,	20);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (10,	"MK handbang",	"Accessories",	698.45,	16);







