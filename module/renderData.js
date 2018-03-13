var template = require('art-template');

function renderData (res, text, data) {
    var html = template.compile(text)({list: data});
    res.end(html);
}

module.exports = renderData;