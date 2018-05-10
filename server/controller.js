// const testData = [
//     {
//         id: 0,
//         name: 'Black leather shoes',
//         price: 20.00,
//         imgURL: 'https://content.artofmanliness.com/uploads/2011/02/Classic-Oxford-English-Made.jpg'
//     },
//     {
//         id: 1,
//         name: 'Bobby Boxers',
//         price: .99,
//         imgURL: 'https://images-na.ssl-images-amazon.com/images/I/914WViyrKpL._UL1500_.jpg'
//     },
//     {
//         id: 2,
//         name: 'Socks',
//         price: 10.00,
//         imgURL: 'https://s3.amazonaws.com/ultracart/im/SMSRT/EF0CB43D0B5025015E526E2AE9051900?AWSAccessKeyId=0P4TXH5AKGYC8WHDZFG2&Expires=1525855718&Signature=43GexhHZTJW2sykd78bGHrVtONM%3D'
//     },
//     {
//         id: 3,
//         name: 'The Bro by Kramer',
//         price: 40.00,
//         imgURL: 'https://vignette.wikia.nocookie.net/seinfeld/images/a/a2/The_bro.jpg/revision/latest?cb=20120925225313'
//     },
//     {
//         id: 4,
//         name: 'Sunset Dress',
//         price: 6.99,
//         imgURL: 'https://i.pinimg.com/originals/bf/0d/e4/bf0de41af8d6cb447f5e8e57504b1a76.jpg'
//     },
//     {
//         id: 5,
//         name: 'Howling at the Moon Calamity',
//         price: 400.00,
//         imgURL: 'https://i.ytimg.com/vi/TCKxxiVrC_o/maxresdefault.jpg'
//     },
//     {
//         id: 6,
//         name: 'Sonic Costume \n Hide from your friends',
//         price: 29.99,
//         imgURL: 'https://images-na.ssl-images-amazon.com/images/I/61dcVGnauzL._UY445_.jpg'
//     },
//     {
//         id: 7,
//         name: 'Chef Suit',
//         price: 49.99,
//         imgURL: 'https://foxyfancydress.co.uk/images/products/large/171007135421_1.jpg'
//     },
//     {
//         id: 8,
//         name: 'School Uniform',
//         price: 15.99,
//         imgURL: 'https://cdn.shopify.com/s/files/1/1148/1274/files/LA-85112_lg.jpg?v=1488696734'
//     },
//     {
//         id: 9,
//         name: 'Ninja Warrior',
//         price: 666.66,
//         imgURL: 'https://target.scene7.com/is/image/Target/50380787?wid=488&hei=488&fmt=pjpeg'
//     }
// ];

// let idCount = 10;
module.exports = {
    sendAll: (req, res, next) => {
        const dbInstance = req.app.get( 'db' );
        dbInstance.seedFile()
        .then( (table) => {
            console.log(`File seeded`, table)
            res.status(200).send(table);
        }).catch( (errorMessage) => {
            res.status(500).send( errorMessage );
        });
    },
    fetchTable: ( req, res, next ) => {
        const dbInstance = req.app.get( 'db' );
        dbInstance.getTheTable()
        .then( (table) => {
            res.status(200).send(table);
        }).catch( (errorMessage) => {
            res.status(500).send( errorMessage );
        });
    },
    retreveAProduct: (req, res, next) => {
        const dbInstance = req.app.get( 'db' );
        const { id } = req.params;
        dbInstance.getById([id])
        .then( (callb )  => {
            res.status(200).send(callb)
        }).catch( (err) => {
            res.status(500).send( err);
        })

        // let individualObject = testData[id];
        // res.status(200).send(individualObject);
    },
    changeAProduct: (req, res, next ) => {
        const dbInstance = req.app.get( 'db' );
        const { id } = req.params;
        const { name, price, imgurl } = req.body;
        
        dbInstance.editProduct([ id, name, price, imgurl ])
        .then( (callb )  => {
            res.status(200).send(dbInstance.getTheTable)
        }).catch( (err) => {
            res.status(500).send( err);
        })
    },
    createAProduct: (req, res, next) => {
        const dbInstance = req.app.get( 'db' );
        const { name, price, imgurl } = req.body;
        const newProduct = {
            name: name,
            price: price,
            imgurl: imgurl
        }
        dbInstance.createProduct([ name, price, imgurl ])
        .then( (callb )  => {
            res.status(200).send(dbInstance.getTheTable)
        }).catch( (err) => {
            res.status(500).send( err);
        })   
    },
    removeProduct: (req, res, next) => {
        const dbInstance = req.app.get( 'db' );
        const { id } = req.params;
        dbInstance.deleteProduct([id])
        .then( (call)  => {
            res.status(200).send(dbInstance.getTheTable)
        }).catch( err => {
            console.log(err);
        })
    }
    

};