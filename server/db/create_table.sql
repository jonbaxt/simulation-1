DROP TABLE IF EXISTS simproducts;

CREATE TABLE simproducts (
id serial PRIMARY KEY,
name varchar(25),
price decimal,
img text
);


INSERT INTO simproducts
(name, price, img)
VALUES
('Shoes', 9.99, 'https://www.express.com/content/dam/express/2017/projects/digital/web/category-pages/10-october/1002-t19687-m-shoes-vis-nav/m-dress-shoes-nav.jpg'),
('Shirt', 15.29, 'https://www.customink.com/mms/images/catalog/styles/286800/catalog_detail_image_large.jpg'),
('Pants', 10.19, 'http://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2017%2FF00%200532275%20004%2055%202574.jpg%5D%2Cmedia_type%5BSTILL_LIFE_FRONT%5D%2Ctshirt_size%5BS%5D%2Cquality%5BM%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Flegacy%2Fv1%2Fproduct.chain%5D');

SELECT *
FROM simproducts;