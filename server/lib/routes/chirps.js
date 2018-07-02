'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var express = require('express');
var chirpStore = require('../chirpstore');

var router = express.Router();

router.get('/:id?', function (req, res) {
    var id = req.params.id;
    if (id) {
        res.json(chirpStore.GetChirp(id));
    } else {
        res.send(chirpStore.GetChirps());
    }
});

router.post('/', function (req, res) {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id', function (req, res) {
    var id = req.params.id;
    chirpStore.UpdateChirp(id, req.body);
    res.sendStatus(200);
});

router.delete('/:id', function (req, res) {
    var id = req.params.id;
    res.json(chirpStore.DeleteChirp(id, req.body));
});

module.exports = router;

exports.default = router;