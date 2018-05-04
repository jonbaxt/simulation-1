module.exports = {
    fetchData: (req, res) => {
        const dbInstance = req.app.get( 'db' );
        
        dbInstance.get_inventory()
        .then( (table) => {
            console.log(table);
            console.log(req.body);
            res.status(200).send(table);
        }).catch( (errorMessage) => {
            console.log(errorMessage);
            res.status(500).send( errorMessage );
        });
        
    },
    postNewData: (req, res) => {
        const dbInstance = req.app.get( 'db' );
        const { name, price, img } = req.body;
        console.log(name);

        dbInstance.create_product([ name, price, img ])
        .then( (callb) =>{
            res.status(200).send(dbInstance.get_inventory);


        }).catch( (err) => {
            res.status(500).send(err);


        })

    },
    editData: (req, res ) => {
        const id = req.params.id;
        const { name, price, img } = req.body;

        dbInstance.edit_prodcut([ id, name, price, img ])
        .then( (callb )  => {
            res.status(200).send(dbInstance.get_inventory)
        }).catch( (err) => {
            res.status(500).send( err);
        })

    },
    deleteData: (req, res) => { 
        const id = req.params.id;
        dbInstance.delete_product([id])
        .then( (call)  => {
            res.status(200).send(dbInstance.get_inventory)
        }).catch( err => {
            console.log(err);
        })
    }


}