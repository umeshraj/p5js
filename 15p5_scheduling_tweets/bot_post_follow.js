console.log('Bot is working!!');

var Twit = require('twit');
var config = require('./config')

var T = new Twit(config);

// setting up a user stream
var stream = T.stream('user');

// anytime someone follows me
stream.on('follow', followed);

function followed(eventMsg){
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    tweetIt('@' + screenName + ' thank you for following me!');
}

// tweetIt();
// setInterval(tweetIt, 1000*10);

function tweetIt(txt){
    var tweet = {
        status: txt
    }
    T.post('statuses/update', tweet, tweeted);
    
    function tweeted(err, data, response) {
        if (err){
            console.log("Something went wrong!");
        }else{
            console.log("It worked");
        }
      }
}

