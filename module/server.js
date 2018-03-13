var express = require('express');
var getData = require('./getData');
var app = express();

var basicUrl = 'https://cnodejs.org/';

function start () {
    app.get('/', function (req, res, next) {
        console.log(req.path)
        var query = req.query;
        getData({res, basicUrl, query});
    }).listen(9999, function (req, res, next) {
        console.log('wellcome to access cnode!!!')
    });
}

exports.start = start;
