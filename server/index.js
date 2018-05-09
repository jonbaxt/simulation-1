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





app.listen(PORT, () => console.log(`Yeah baby! Weclcome to Port: ${PORT}!!!!`))