1. https://leetcode.com/problems/recyclable-and-low-fat-products/description/?envType=study-plan-v2&envId=top-sql-50
2. https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript


# library store
1. Books
2. Authors
3. BookAuthors (junction table for many-to-many relationship)
4. Publishers
5. Categories
6. Customers
7. Orders
8. OrderItems

---
## 1. Books Table
Columns:
book_id (Primary Key): Unique identifier for each book.
- title: Title of the book.
- publisher_id (Foreign Key): References the Publishers table.
- publication_year: Year the book was published.
- isbn: International Standard Book Number.
- price: Selling price of the book.
- category_id (Foreign Key): References the Categories table.
- stock_quantity: Number of copies available in inventory.

## 2. Authors Table
Purpose: Contains information about authors who have written books.
Columns:
- author_id (Primary Key): Unique identifier for each author.
- first_name: Author's first name.
- last_name: Author's last name.
- bio: Short biography of the author.

## 3. BookAuthors Table (Junction Table)
Purpose: Resolves the many-to-many relationship between Books and Authors.

Columns:

- book_id (Foreign Key): References the Books table.
- author_id (Foreign Key): References the Authors table.


## 4. Publishers Table
Purpose: Stores information about book publishers.

Columns:

- publisher_id (Primary Key): Unique identifier for each publisher.
- name: Name of the publisher.
- address: Publisher's address.
- phone: Contact phone number.
- email: Contact email address.

## 5. Categories Table
Purpose: Defines the categories or genres of books.

Columns:

- category_id (Primary Key): Unique identifier for each category.
- category_name: Name of the category (e.g., Fiction, Non-fiction).
-description: Description of the category.


## 6. Customers Table
Purpose: Holds information about customers who purchase books.

Columns:

- customer_id (Primary Key): Unique identifier for each customer.
- first_name: Customer's first name.
- last_name: Customer's last name.
- email: Contact email address.
- phone: Contact phone number.
- address: Customer's address.


## 7. Orders Table
Purpose: Records orders placed by customers.

Columns:

- order_id (Primary Key): Unique identifier for each order.
- customer_id (Foreign Key): References the Customers table.
- order_date: Date when the order was placed.
- status: Current status of the order (e.g., Pending, Shipped, Completed).


## 8. OrderItems Table
Purpose: Details the specific books included in each order.

Columns:

- order_item_id (Primary Key): Unique identifier for each order item.
- order_id (Foreign Key): References the Orders table.
- book_id (Foreign Key): References the Books table.
- quantity: Number of copies of the book ordered.
- unit_price: Price of the book at the time of the order.