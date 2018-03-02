'use strict';

const express = require('express');
var _ = require('lodash');
const app = express();

/* 
Not required, realized latter that this project has to be hosted on gitpages and it don't support nodejs server :(

*/

app.post('/getBatsmanResult', (req, res) => {

    let getBatsmanResult = {}
    res.json({
        data: getBatsmanResult
    });

})

app.get('/getIPLResult', (req, res) => {

    let IPLResults = "vineet"
    res.json({
        data: IPLResults
    });

})

app.post('/getBowlersResult', (req, res) => {

    let bowlersResult = {}
    res.json({
        data: bowlersResult
    });

})

app.listen(3333);
console.log('Listening on localhost:3333');