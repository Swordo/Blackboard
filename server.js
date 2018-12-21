const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');


const Students = require('./Router/Students/');
const Teachers = require('./Router/Teachers/');
const Classes = require('./Router/Classes/');
const DB = require('./DBConnect');


const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


app.use('/', Students);
app.use('/', Teachers);
app.use('/', Classes);



app.listen(port, function (err) {
    if (err) {
        throw err;
    } else {
        console.log(`Server is runnig...`)
    }
})