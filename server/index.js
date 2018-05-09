const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controller');

const app = express();
const PORT = 3100;
massive( process.env.SECRET ).then( dbInst => {
    app.set( 'db', dbInst );
    console.log('Outer database is connected.')
})

app.use( bodyParser.json() );

app.get('/api/products', controller.sendAll);


app.delete('/api/products/:id', controller.removeProduct);




app.listen(PORT, () => console.log(`Yeah baby! Weclcome to Port: ${PORT}!!!!`))