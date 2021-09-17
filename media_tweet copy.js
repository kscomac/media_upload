'use stritct';


$(function () {
  $("#api-tweet").click(function () {
    console.log('node media_tweet.js');

  const Twitter = require('twitter');
  const client = new Twitter({
  consumer_key: '9WOjzGmEkhUyzyreAeXUKAEPg',
  consumer_secret: 'zXUKzm5cAYLHqoGbXe0lJG2RP0VjUM065CEtIgWLVwI3xRjPEX',
  access_token_key: '1430443643991515137-GNU6LiINK4kFs4FSnTLTaW6kvxc4Dj',
  access_token_secret: '3PwALQq13gkKVpro2ug8y9KkO3qkT7zbOXglWdhVQv0vP',
});

// Load your image
var data = require('fs').readFileSync('https://kscomac.github.io/media_upload/img1.jpg');

// Make post request on media endpoint. Pass file data as media parameter
client.post('media/upload', {media: data}, function(error, media, response) {

  if (!error) {

    // If successful, a media object will be returned.
    console.log(media);

    // Lets tweet it
    var status = {
      status: 'success',
      media_ids: media.media_id_string // Pass the media id string
    }

    client.post('statuses/update', status, function(error, tweet, response) {
      if (!error) {
        console.log(tweet);
      }
    });

  }
});

  })

})
