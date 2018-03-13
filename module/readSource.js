var fs = require('fs');
var renderData = require('./renderData');

function readSource (res, data) {
    fs.readFile('./static/index.html', 'utf-8', function(err, text) {
        renderData(res, text, data);
    });
}

module.exports = readSource;