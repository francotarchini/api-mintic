//import json from 'express';
const express = require('express');
const morgan = require('morgan');
//import express from 'express';
//import morgan from 'morgan';
const cors = require('cors');

//import './database.js';
require('./database');
const app = express();

const PORT = process.env.PORT || 5000;
app.set('port', PORT);
//app.set('port', 5000);
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/productos',require('./routes/productos.routes'));

app.listen(app.get('port'),()=>{
    console.log("Server on port ",app.get('port'))
})
