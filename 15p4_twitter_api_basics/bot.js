console.log('Bot is working!!');

var Twit = require('twit');
var config = require('./config')
console.log(config);

var T = new Twit(config);
var params = { 
    q: 'rainbow', 
    count: 10,
    lang: 'en'
}

T.get('search/tweets', params, gotData); 

function gotData(err, data, response) {
    var tweets = data.statuses;
    for(var i=0; i<tweets.length; i++){
        console.log(tweets[i].text);
    }
};