"use strict";


const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get( '/', (req,res) => {
    res.type('text/plain');
    res.send('Home');
});

app.get( '/about', (req,res) => {
    res.type('text/plain');
    res.send('About');
});


app.use( (req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Page not found');
});

app.listen(port, () => {
    console.log(`Server is runing at address: http://127.0.0.1:${port}`);
});