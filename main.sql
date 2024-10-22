-- sasalmdamds;la
SELECT * FROM user;

--CREATE DATABASE
CREATE DATABASE n14;


INSERT INTO kitoblar (
name, page)
VALUES
('GROKKING ALGORITHMS', 200),
('CLEAN CODE', 600),
('PROGMATIK PROGRAMMING', 300),
('YOU DON''T KNOW JAVASCRIPT',100);

-- user
create table user(
id serial primary key,
name varchar(244) not null
book_id int,
FOREIGN KEY(book_id)  REFERENCES book(id)
);


insert into user_1(name) values ('ali'), ('guli');
