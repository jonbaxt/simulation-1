-- DROP TABLE IF EXISTS sim1redoProducts;

-- CREATE TABLE sim1redoProducts (
-- id serial PRIMARY KEY,
-- name varchar(25),
-- price decimal,
-- imgurl text
-- );


DROP TABLE IF EXISTS sim1redoProducts;

CREATE TABLE sim1redoProducts (
id serial PRIMARY KEY,
name text,
price decimal,
imgurl text
);


INSERT INTO sim1redoProducts
(name, price, imgURL)
VALUES
('IT Costume', 15.29, 'http://static2.uk.businessinsider.com/image/59e8e06ab0c29224f43a76a4-800/it%20pennywise%20costume%20cosplay%20halloween.jpg'),
('Gizmo', 600.01, 'https://i2-prod.mirror.co.uk/incoming/article6037967.ece/ALTERNATES/s615b/Gizmo-from-the-Gremlins.jpg'),
('Mona Lisa', 9129.00, 'https://media2.s-nbcnews.com/j/newscms/2014_18/417371/mona-lisa-1_1e105646264096507259e48339f3f75a.nbcnews-ux-1024-900.jpg'),
('Sunset Dress', 6.99, 'https://i.pinimg.com/originals/bf/0d/e4/bf0de41af8d6cb447f5e8e57504b1a76.jpg'),
('Clown Shoes', 29.99, 'https://i.ebayimg.com/images/g/cdIAAOSwpP9Y8GFT/s-l300.jpg'),
('Socks', 10.00, 'https://s3.amazonaws.com/ultracart/im/SMSRT/EF0CB43D0B5025015E526E2AE9051900?AWSAccessKeyId=0P4TXH5AKGYC8WHDZFG2&Expires=1525855718&Signature=43GexhHZTJW2sykd78bGHrVtONM%3D'),
('The Bro by Kramer', 40.00, 'https://vignette.wikia.nocookie.net/seinfeld/images/a/a2/The_bro.jpg/revision/latest?cb=20120925225313'), 
('Pickles?', .99, 'https://smartymockups.com/wp-content/uploads/2018/03/Pickle_Jar_Mockup_1.jpg'),
('Sonic Costume: Hide from your friends in style', 29.99, 'https://images-na.ssl-images-amazon.com/images/I/61dcVGnauzL._UY445_.jpg'),
('Howling at the Moon Calamity', 400.00, 'https://i.ytimg.com/vi/TCKxxiVrC_o/maxresdefault.jpg' ),
('Supeman Jacket', 99.99, 'https://www.celebsclothing.com/product_images/p/525/Black_Superman_Jacket__85982_zoom.jpg'),
('Chef Suit', 49.99, 'https://foxyfancydress.co.uk/images/products/large/171007135421_1.jpg'),
('Ninja Warrior', 666.66, 'https://target.scene7.com/is/image/Target/50380787?wid=488&hei=488&fmt=pjpeg'),
('Other Leather Jacket', 551.00, 'https://d4zpg1jklewne.cloudfront.net/steak/spree-variant/leather-moto-jacket-with-silver-hardware-2/black-leather-moto-jacket-product.jpg?1517954316'),
('Leather Jacket', 52.90, 'https://media.missguided.com/s/missguided/O1443271_set/1/black-concealed-stud-biker-jacket'),
('School Uniform', 15.99, 'https://cdn.shopify.com/s/files/1/1148/1274/files/LA-85112_lg.jpg?v=1488696734'),
('The hobo look', 0.09, 'http://www.shorpy.com/files/images/SHORPY_8b32870u.jpg'),
('Obama Disguise', 25.50, 'https://pageslap.files.wordpress.com/2008/10/dsc09812.jpg'),
('Bart Simpson: A chance to look weird', 2.00, 'https://images.halloweencostumes.com/products/27147/1-1/adult-bart-simpson-costume.jpg'),
('Itchy and Scratchy Duo Set', 56.00, 'https://img00.deviantart.net/aea5/i/2012/079/6/d/itchy_and_scratchy_by_misssayuri-d4tdvt2.jpg'),
('Michael Myers: You will love it at the party', 0, 'https://images.maskworld.com/is/image/maskworld/bigview/original-michael-myers-h2-complete-costume--mw-110269-1.jpg'),
('JASON! FREE!!! SUPER DEAL!!!!', 0, 'https://images.halloweencostumes.com/products/9884/1-1/jason-costume.jpg'),
('Amy Pond Jacket', 50.00, 'http://www.moviesjacket.com/image/cache/data/doctor-who-amy-pond-brown-leather-jacket/amy-pond-brown-leather-jacket-850x1300.jpg'),
('Amy Pond Flannel Shirt', 10.00, 'https://media.immediate.co.uk/volatile/sites/3/2017/04/136070.9aaa1236-5d2c-49eb-a996-812f12cc04dd.jpg?quality=90&resize=620,413'),
('Rose Jacket', 90.00, 'https://carboncostume.com/wordpress/wp-content/uploads/2013/03/Rose-Tyler-Character-Cap.jpg');