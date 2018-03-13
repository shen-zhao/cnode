var superagent = require('superagent');
var cheerio = require('cheerio');
var readSource = require('./readSource.js');

function getData (params) {
    var data = [];
    superagent.get(`${params.basicUrl}?tab=${params.query.tab || ''}&page=${params.query.page || ''}`)
        .end(function(err, res) {
            if (err) {
                console.log(err);
            }
            
            var $ = cheerio.load(res.text);
            $('#topic_list .cell').each(function() {
                data.push({
                    title: $(this).find('.topic_title').text(),
                    href: $(this).find('.topic_title').prop('href'),
                    author: $(this).find('.user_avatar').prop('href').substring(6)
                });
            });
            console.log(readSource)
            readSource(params.res, data);
        });
}

module.exports = getData;