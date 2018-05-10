DROP TABLE IF EXISTS sim1redoProducts;

CREATE TABLE sim1redoProducts (
id serial PRIMARY KEY,
name varchar(25),
price decimal,
imgurl text
);


INSERT INTO sim1redoProducts
(name, price, imgurl)
VALUES
('Other Shoes', 9.99, 'https://www.express.com/content/dam/express/2017/projects/digital/web/category-pages/10-october/1002-t19687-m-shoes-vis-nav/m-dress-shoes-nav.jpg'),
('Shirt Weird', 15.29, 'https://www.customink.com/mms/images/catalog/styles/286800/catalog_detail_image_large.jpg'),
('Pants Okay', 10.19, 'http://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2017%2FF00%200532275%20004%2055%202574.jpg%5D%2Cmedia_type%5BSTILL_LIFE_FRONT%5D%2Ctshirt_size%5BS%5D%2Cquality%5BM%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Flegacy%2Fv1%2Fproduct.chain%5D'),
('Black leather shoes', 20.00, 'https://content.artofmanliness.com/uploads/2011/02/Classic-Oxford-English-Made.jpg'),
('Bobby Boxers', .99, 'https://images-na.ssl-images-amazon.com/images/I/914WViyrKpL._UL1500_.jpg'),
('Socks', 10.00, 'https://s3.amazonaws.com/ultracart/im/SMSRT/EF0CB43D0B5025015E526E2AE9051900?AWSAccessKeyId=0P4TXH5AKGYC8WHDZFG2&Expires=1525855718&Signature=43GexhHZTJW2sykd78bGHrVtONM%3D'),
('The Bro by Kramer', 40.00, 'https://vignette.wikia.nocookie.net/seinfeld/images/a/a2/The_bro.jpg/revision/latest?cb=20120925225313'), 
('Sunset Dress', 6.99, 'https://i.pinimg.com/originals/bf/0d/e4/bf0de41af8d6cb447f5e8e57504b1a76.jpg'),
('Howling at the Moon Calamity', 400.00, 'https://i.ytimg.com/vi/TCKxxiVrC_o/maxresdefault.jpg' ),
('Sonic Costume \n Hide from your friends', 29.99, 'https://images-na.ssl-images-amazon.com/images/I/61dcVGnauzL._UY445_.jpg'),
('Chef Suit', 49.99, 'https://foxyfancydress.co.uk/images/products/large/171007135421_1.jpg'),
('School Uniform', 15.99, 'https://cdn.shopify.com/s/files/1/1148/1274/files/LA-85112_lg.jpg?v=1488696734'),
('Ninja Warrior', 666.66, 'https://target.scene7.com/is/image/Target/50380787?wid=488&hei=488&fmt=pjpeg');

-- SELECT *
-- FROM sim1redoProducts;
