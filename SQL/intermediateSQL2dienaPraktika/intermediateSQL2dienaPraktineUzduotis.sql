

CREATE TABLE clients (
    client_id bigint PRIMARY KEY AUTO_INCREMENT,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    city date NOT NULL
);

CREATE TABLE orders (
    order_id bigint PRIMARY KEY AUTO_INCREMENT,
    order_price decimal(20, 2) NOT NULL,
    order_date int NOT NULL,
    client_id bigint NOT NULL
    FOREIGN KEY (client_id) REFERENCES clients(client_id)
);


-- clients table insertion from mockaroo.com

insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Ramona', 'Arminger', 'Vilnius');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Deonne', 'Amott', 'Siauliai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Darcy', 'Flanaghan', 'Jonava');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Christi', 'Lynch', 'Siauliai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Lina', 'Billam', 'Kaunas');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Fidelia', 'Stopforth', 'Anyksciai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Rad', 'Munnery', 'Marijampole');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Karena', 'Lenz', 'Marijampole');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Hartley', 'O''Carran', 'Sakiai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Jessi', 'Kedward', 'Siauliai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Haslett', 'Crapper', 'Siauliai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Kessia', 'Szymanek', 'Ukmerge');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Brucie', 'Langfitt', 'Siauliai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Chrissie', 'Rideout', 'Sakiai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Dode', 'Langdale', 'Klaipeda');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Elspeth', 'Novacek', 'Sakiai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Marco', 'Trunby', 'Anyksciai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Linda', 'Bullion', 'Vilnius');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Joel', 'Sherry', 'Jonava');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Hilton', 'Pummery', 'Radviliskis');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Berna', 'Cathcart', 'Siauliai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Natala', 'Lattka', 'Marijampole');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Rosetta', 'Drivers', 'Siauliai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Margaretha', 'Fourmy', 'Sakiai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Tailor', 'Becket', 'Marijampole');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Grantham', 'Scrine', 'Anyksciai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Bobine', 'Colbertson', 'Sakiai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Arny', 'Dutt', 'Vilnius');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Kilian', 'Oleksiak', 'Ukmerge');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Jermayne', 'Kasbye', 'Ukmerge');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Sully', 'Bruton', 'Anyksciai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Maddi', 'Ikin', 'Klaipeda');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Andreana', 'Saterweyte', 'Klaipeda');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Gareth', 'Sterland', 'Vilnius');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Rochell', 'McPartling', 'Jonava');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Felicia', 'Issitt', 'Kaunas');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Ransom', 'O''Fergus', 'Sakiai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Jameson', 'Di Gregorio', 'Jonava');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'El', 'Sivorn', 'Kaunas');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Elden', 'Danks', 'Jonava');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Claudie', 'Simonnot', 'Anyksciai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Harrie', 'Gayler', 'Marijampole');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Krispin', 'Flag', 'Siauliai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Andra', 'D''Andrea', 'Ukmerge');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Kanya', 'Bibbie', 'Kaunas');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Tiffi', 'Ithell', 'Ukmerge');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Reginauld', 'Dymick', 'Marijampole');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Garnette', 'Tidcombe', 'Radviliskis');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Rayna', 'Stockow', 'Jonava');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Ritchie', 'O''Fihily', 'Ukmerge');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Floris', 'Topes', 'Klaipeda');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Rocky', 'Cuxson', 'Vilnius');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Nola', 'Keeling', 'Kaunas');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Hildagarde', 'Lawtie', 'Klaipeda');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Tresa', 'Klageman', 'Ukmerge');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Allayne', 'Bardsley', 'Marijampole');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Laurette', 'Shipsey', 'Vilnius');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Clayborn', 'Beedham', 'Marijampole');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Jeanette', 'Dust', 'Ukmerge');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Kim', 'Fermoy', 'Siauliai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Brendon', 'Todaro', 'Sakiai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Jordon', 'Everard', 'Klaipeda');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Mickey', 'Brasier', 'Anyksciai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Guillemette', 'Antusch', 'Siauliai');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Fonzie', 'Kopta', 'Ukmerge');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Doll', 'Greenslade', 'Jonava');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Piper', 'Mountford', 'Klaipeda');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Annice', 'Wycherley', 'Ukmerge');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Steffen', 'Beazleigh', 'Radviliskis');
insert into clients (client_id, first_name, last_name, city) values (DEFAULT, 'Sheena', 'Rechert', 'Vilnius');

-- orders table insertion from mockaroo.com
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 6639.37, '2019-11-07', 42);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 997.71, '2021-05-19', 14);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 4589.56, '2018-07-21', 43);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 9769.33, '2019-01-23', 12);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 2247.27, '2020-05-23', 8);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 7961.44, '2016-02-28', 1);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 6401.29, '2012-03-22', 41);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 3231.98, '2020-03-11', 35);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 2739.76, '2018-03-09', 56);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 5586.67, '2014-12-03', 6);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 6036.8, '2021-12-10', 25);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 698.16, '2013-02-17', 10);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 8522.15, '2018-11-28', 54);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 325.88, '2014-02-13', 24);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 9224.5, '2023-10-20', 41);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 4309.6, '2023-01-14', 14);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 3981.13, '2014-09-22', 57);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 708.75, '2012-04-10', 33);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 1294.94, '2012-03-21', 19);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 3108.3, '2022-02-18', 44);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 7310.97, '2018-01-17', 38);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 13.21, '2018-10-31', 43);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 1217.55, '2023-03-01', 35);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 2132.63, '2018-07-22', 41);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 7322.77, '2010-11-27', 55);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 6144.49, '2011-08-10', 50);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 3699.52, '2022-08-01', 62);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 1090.32, '2022-01-12', 58);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 8982.25, '2017-12-14', 16);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 6609.65, '2020-10-16', 35);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 2838.24, '2022-11-17', 44);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 7554.04, '2021-06-14', 25);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 5979.14, '2016-07-18', 13);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 8808.22, '2022-04-14', 53);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 6979.91, '2014-02-01', 52);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 4971.44, '2015-03-05', 7);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 8020.88, '2015-08-28', 36);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 4083.46, '2016-10-22', 24);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 9808.11, '2014-05-23', 59);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 6295.2, '2019-01-28', 4);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 831.94, '2014-02-11', 4);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 777.68, '2012-08-02', 30);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 6998.15, '2013-06-04', 36);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 6179.42, '2023-03-25', 67);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 8315.11, '2015-12-31', 5);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 3731.91, '2017-01-19', 38);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 5978.22, '2013-01-09', 62);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 5002.04, '2016-08-12', 36);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 7729.99, '2016-12-03', 53);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 182.43, '2017-10-05', 52);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 1778.38, '2012-09-17', 50);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 8719.91, '2016-07-31', 34);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 1032.34, '2016-11-27', 40);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 2411.19, '2023-07-08', 7);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 8720.43, '2021-04-25', 10);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 7113.74, '2012-04-18', 61);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 550.94, '2019-01-29', 42);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 5892.47, '2022-01-16', 30);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 8576.83, '2022-05-15', 28);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 4757.14, '2022-08-11', 42);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 7330.94, '2012-09-26', 38);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 4037.23, '2015-09-24', 35);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 7077.76, '2014-11-28', 18);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 5193.22, '2014-07-21', 19);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 7304.93, '2019-04-21', 36);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 1020.44, '2010-12-28', 35);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 1334.06, '2020-10-13', 2);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 2103.0, '2012-04-14', 34);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 6851.13, '2019-01-27', 33);
insert into orders (order_id, order_price, order_date, client_id) values (DEFAULT, 7616.82, '2017-02-26', 30);


-- 4.

SELECT *
FROM clients
LEFT JOIN orders
ON clients.client_id = orders.client_id
ORDER BY clients.client_id

-- 5.

SELECT *
FROM clients
LEFT JOIN orders
ON clients.client_id = orders.client_id
WHERE order_id IS NULL
ORDER BY clients.client_id

-- 6.

SELECT first_name, last_name, count(orders.order_id) AS orders
FROM clients
LEFT JOIN orders
ON clients.client_id = orders.client_id
GROUP BY clients.client_id
ORDER BY orders DESC

-- 7.

SELECT first_name, last_name, count(orders.order_id) AS orders
FROM clients
LEFT JOIN orders
ON clients.client_id = orders.client_id
GROUP BY clients.client_id
HAVING orders >= 3
ORDER BY orders DESC

-- 8.



-- 9.

SELECT *
FROM orders
HAVING order_price >= 1000

-- 10.

SELECT *
FROM clients
LEFT JOIN orders
ON clients.client_id = orders.client_id
ORDER BY clients.client_id

-- 14.

SELECT city, count(order_id)
FROM orders
