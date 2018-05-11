const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

const controller = require('./controller');
const app = express();

massive( process.env.SECRET ).then( dbInstance => {
    dbInstance.seedFile()
    .then(res => console.log('seed successful'))
    .catch(err => console.log('seed failed', err))
    app.set( 'db', dbInstance );
    console.log('Outer database is connected.')
})

app.use( bodyParser.json() );
app.use( cors() );
app.use( express.static( `${__dirname}/build`));

app.put('/api/products/table', controller.sendAll);

app.get('/api/products', controller.fetchTable);
app.get('/api/products/:id', controller.retreveAProduct);
app.put('/api/products/change/:id', controller.changeAProduct);
app.post('/api/products', controller.createAProduct);
app.delete('/api/products/:id', controller.removeProduct);

const PORT = process.env.PORT || 3100 ;
app.listen(PORT, () => console.log(`Port: ${PORT} FREEDOM!!!!`))