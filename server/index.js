const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const con = require('./controller');

const app = express();
app.use(bodyParser.json());
app.use( cors() );

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log(`Connected to external database.`)
    }).catch(err => console.log(`Database Connection Error`))

app.get('/api/inventory', con.fetchData);

app.post('/api/inventory', con.postNewData);



const port = 3013;

app.listen( port, console.log(`All rejoice, port ${port} is now on`));