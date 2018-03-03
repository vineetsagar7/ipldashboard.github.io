'use strict';
var batsmanAggScore = require('./frontendData/batsmanAggScore.json')
var matchPerformance = require('./frontendData/matchPerformance')
var mostWisketTackers = require('./frontendData/mostWisketTackers')
var runSortedBySeason = require('./frontendData/runSortedBySeason')

const express = require('express');
var _ = require('lodash');
const app = express();


app.get('/getBatsmanAggScore', (req, res) => {
    res.json({
        data: batsmanAggScore
    });
})

app.get('/getMatchPerformance', (req, res) => {
    res.json({
        data: matchPerformance
    });
})

app.get('/getMmostWisketTackers', (req, res) => {
    res.json({
        data: mostWisketTackers
    });
})

app.get('/getRunSortedBySeason', (req, res) => {
    res.json({
        data: runSortedBySeason
    });
})

app.listen(3333);
console.log('Listening on localhost:3333');