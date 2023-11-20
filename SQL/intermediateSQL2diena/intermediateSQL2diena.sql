
-- one to one

CREATE TABLE persons (
    person_id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    birth_date date NOT NULL
);

CREATE TABLE identities (
    identity_id int PRIMARY KEY AUTO_INCREMENT,
    identity_code varchar(30) NOT NULL,
    person_id int NOT NULL,
    FOREIGN KEY (person_id) REFERENCES persons(person_id)
);

-- one to many

CREATE TABLE country (
    country_id int PRIMARY KEY AUTO_INCREMENT,
    country_name varchar(50) NOT NULL
);

CREATE TABLE cities (
    city_id int PRIMARY KEY AUTO_INCREMENT,
    size_sq_km bigint NOT NULL,
    country_id int NOT NULL,
    FOREIGN KEY (country_id) REFERENCES country(country_id)
);

-- many to many with joining table

CREATE TABLE books (
    book_id bigint PRIMARY KEY AUTO_INCREMENT,
    title varchar(50) NOT NULL,
    price decimal(10, 2) NOT NULL,
    year int NOT NULL,
    pages_count bigint NOT NULL
);

CREATE TABLE authors (
    author_id bigint PRIMARY KEY AUTO_INCREMENT,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    gender varchar(20) NOT NULL,
    country varchar(50) NOT NULL
);

CREATE TABLE books_junction (
    junction_id bigint PRIMARY KEY AUTO_INCREMENT,
    book_id bigint NOT NULL,
    author_id bigint NOT NULL,
    FOREIGN KEY (book_id) REFERENCES books(book_id),
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);
