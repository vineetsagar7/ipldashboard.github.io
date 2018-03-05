'use strict';
var batsmanAggScore = require('./frontendData/batsmanAggScore.json')
var teamPerMatchPerform = require('./frontendData/teamPerMatchPerform')
var mostWisketTackers = require('./frontendData/mostWisketTackers')
var runSortedBySeason = require('./frontendData/runSortedBySeason')
var seasonWiseDissmisal = require('./frontendData/seasonWiseDissmisal')
var topPerformersPerSeason = require('./frontendData/topPerformersBatsman')
var goldenPlayer = require('./frontendData/goldenPlayer')

var cool = require('cool-ascii-faces');
const express = require('express');
var _ = require('lodash');
const app = express();

const setHeader = function (res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    return res;
}

app.get('/getOrangePurpleSeries', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.json({
        data: goldenPlayer.data
    });
})

app.get('/getBatsmanAggScore', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.json({
        data: batsmanAggScore
    });
})

app.get('/getMatchPerformance', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.json({
        data: teamPerMatchPerform
    });
})

app.get('/getMmostWisketTackers', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.json({
        data: mostWisketTackers
    });
})

app.get('/getDissmisalType', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.json({
        data: seasonWiseDissmisal
    });
})

app.get('/getTopPerformersPerSeason', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.json({
        data: topPerformersPerSeason
    });
})


app.get('/getRunSortedBySeason', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);


    res.json({
        data: runSortedBySeason
    });
})

//Heroku Test
app.get('/cool', function (request, response) {
    response.send(cool());
});

app.listen(process.env.PORT || 5000)
console.log('Listening on localhost:5000');