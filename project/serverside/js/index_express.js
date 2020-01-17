"use strict"

const express = require('express');
const server = express();
const port = 4040

server.get('/', (req,res) => {
    res.send('hello express');
})

server.get('/about', (req,res) => {
    res.send('hello about');
})

server.listen(port, () => {
    console.log('Express Server is running on port ' + port);
});




