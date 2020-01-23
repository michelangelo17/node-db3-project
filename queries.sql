-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT product_name, category_name
FROM categories AS c
INNER JOIN products AS p
ON c.category_id = p.category_id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT order_id, order_date, company_name
FROM shippers AS s
INNER JOIN orders AS o
ON s.shipper_id = o.ship_via
WHERE o.order_date < DATE '2012-08-09' --PostgresQL version of Northwind has different dates, but logic is same.
ORDER BY o.order_date DESC; --Optional

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT product_name, quantity
FROM products AS p
INNER JOIN order_details AS od
ON od.product_id = p.product_id
WHERE od.order_id = 10251
ORDER BY product_name;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT order_id, company_name, last_name
FROM orders AS o
LEFT JOIN customers AS c
ON o.customer_id = c.customer_id
LEFT JOIN employees AS e
ON e.employee_id = o.employee_id;
