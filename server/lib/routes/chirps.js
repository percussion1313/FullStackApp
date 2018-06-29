"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var chirps = [{
    user: "chrundlethegreat",
    text: "Yes, my good man, I'll have the milk steak, boiled over hard, and your finest jelly beans...raw."
}, {
    user: 'anustart12',
    text: ' Michael, you are quite the cupid. You can stick an arrow in my buttocks any time.'
}, {
    user: 'titussss',
    text: "Pinot Noir Caviar, Myanmar Mid-sized car You don't have to be popu-lar Find out who your true friends are"
}];

var router = (0, _express.Router)();

router.get('/', function (req, res) {
    res.json(chirps);
});

exports.default = router;