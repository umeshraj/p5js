console.log('Bot is working!!');

var Twit = require('twit');
var config = require('./config')

var T = new Twit(config);

// setting up a user stream
var stream = T.stream('user');

// anytime someone follows me
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg){
    // The following code is just to avoid looking at docs
    // var fs = require('fs');
    // var json = JSON.stringify(eventMsg, null, 2);
    // fs.writeFile("tweet.json", json);

    var replyto = eventMsg.in_reply_to_screen_name;
    var text = eventMsg.text;
    var from = eventMsg.user.screen_name;

    if (replyto == 'a2zitp'){
        var newtweet = '@' + from + ' thank you!';
        tweetIt(newtweet);
    }
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

