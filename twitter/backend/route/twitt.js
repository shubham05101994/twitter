const router = require("express").Router();
const cors = require("cors");
var Twit = require("twit");

var T = new Twit({
  consumer_key: "",
  consumer_secret: "",
  access_token: "",
  access_token_secret: ""
});
/*
// 1 Search/tweets
var params = { q: 'rainbow', count: 2 }

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
};
T.get('search/tweets', params, gotData);


//2 home_timeline
var params = { count: 10 }

function gotData(err, data, response) {
    console.log(data);
};

T.get('statuses/home_timeline', params, gotData);


//3 user_timeline
T.get('statuses/user_timeline', { screen_name: 'Crackillusion' },  function (err, data, response) {
  console.log(data)
})

//4 mentions_timeline
T.get('statuses/mentions_timeline',  function (err, data, response) {
  console.log(data)
})


//5 friends/ids
T.get('friends/ids', { screen_name: 'Crackillusion' },  function (err, data, response) {
  console.log(data)
})

//6 followers/list
T.get('friends/list', { screen_name: 'Crackillusion' },  function (err, data, response) {
  console.log(data)
})


//7 account/settings
T.get('account/settings', { screen_name: 'Crackillusion' },  function (err, data, response) {
  console.log(data)
})
*/

//8 mutes/users/list

router.route("/mute").get((req, res) => {
  

  T.get("mutes/users/list")
    .then(results => res.json(results))
    .catch(err => res.status(400).json("Error: " + err));

  
});

module.exports = router;
