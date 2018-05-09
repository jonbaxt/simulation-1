const testData = [
    {
        id: 0,
        name: 'Black leather shoes',
        price: 20.00,
        imgURL: 'https://content.artofmanliness.com/uploads/2011/02/Classic-Oxford-English-Made.jpg'
    },
    {
        id: 1,
        name: 'Bobby Boxers',
        price: .99,
        imgURL: 'https://images-na.ssl-images-amazon.com/images/I/914WViyrKpL._UL1500_.jpg'
    },
    {
        id: 2,
        name: 'Socks',
        price: 10.00,
        imgURL: 'https://s3.amazonaws.com/ultracart/im/SMSRT/EF0CB43D0B5025015E526E2AE9051900?AWSAccessKeyId=0P4TXH5AKGYC8WHDZFG2&Expires=1525855718&Signature=43GexhHZTJW2sykd78bGHrVtONM%3D'
    },
    {
        id: 3,
        name: 'Bra',
        price: 40.00,
        imgURL: ''
    },
    {
        id: 4,
        name: 'Wha??',
        price: 4.99,
        imgURL: ''
    }
  ];

module.exports = {
    sendAll: ( req, res, next ) => {
        res.status(200).send(testData);
    },
    retreveAProduct: ( req,res, next ) => {
        const { id } = req.params;
        let individualObject = testData[id];
        res.status(200).send( individualObject );
    },
    removeProduct: (req, res, next ) => {
        const { id } = req.params;
        testData.splice(id, 1)
        res.status( 200 ).send(testData);
    }


};