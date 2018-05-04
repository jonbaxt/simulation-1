module.exports = {
    fetchData: (req, res) => {
        const dbInstance = req.app.get( 'db' );
        
        dbInstance.getAll()
        .then( (table) => {
            console.log(table);
            console.log(req.body);
            res.status(200).send(table);
        }).catch( (errorMessage) => {
            console.log(errorMessage);
            res.status(500).send( errorMessage );
        });

    }


}