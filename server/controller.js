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
        dbInstance.getById([Number(id)])
        .then( (callb )  => {
            res.status(200).send(callb)
        }).catch( (err) => {
            res.status(500).send( err);
        })
    },
    changeAProduct: (req, res, next ) => {
        const dbInstance = req.app.get( 'db' );
        const { id } = req.params;
        const { name, price, imgurl } = req.body;
        // console.log( id, name, price, imgurl, req.body );

        dbInstance.editProduct([ id, name, price, imgurl])
        .then( ( table )  => {
            // console.log( table )
            res.status(200).send(table)
        }).catch( (err) => {
            res.status(500).send( err);
        })
    },
    createAProduct: (req, res, next) => {
        const dbInstance = req.app.get( 'db' );
        const { name, price, imgurl } = req.body;
        dbInstance.createProduct([ name, Number(price), imgurl ])
        .then( (callb )  => {
            dbInstance.getTheTable().then( (table) =>
            res.status(200).send(table)
            )
        }).catch( (err) => {
            res.status(500).send( err);
        })   
    },
    removeProduct: (req, res, next) => {
        const dbInstance = req.app.get( 'db' );
        const { id } = req.params;

        dbInstance.deleteProduct([Number(id)])
        .then( (call)  => {
            dbInstance.getTheTable().then( (table) =>
            res.status(200).send(table)
            )
        }).catch( err => {
            console.log(err);
        })
    }
    

};