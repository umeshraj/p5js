console.log('Bot is working!!');

var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);

var fs = require('fs');

tweetIt();
// setInterval(tweetIt, 1000*10);

function tweetIt(){
    var filename = 'flower.jpg';
    var params = {
        encoding: 'base64'
    }
    var b64 = fs.readFileSync(filename, params);
    T.post('media/upload', {media_data: b64}, uploaded);

    function uploaded(err, data, response){
        // This is where I will tweet
        var id = data.media_id_string;
        var tweet = {
            status: 'image world from node.js',
            media_ids: [id]
        }
        T.post('statuses/update', tweet, tweeted);
    }

    function tweeted(err, data, response) {
        if (err){
            console.log("Something went wrong!");
        }else{
            console.log("It worked");
        }
      }
}

