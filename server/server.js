const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
//commented out instead of deleting to be safe
// app.use(express.static('src'));
app.use(express.static('dist'));

module.exports = app;
