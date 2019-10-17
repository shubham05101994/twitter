const router = require("express").Router();
const cors = require("cors");
var Twit = require("twit");

var T = new Twit({
  consumer_key: 		'SdHvNDEQd5kWb5vyPxDUK4ipb',
  consumer_secret:      '2sBj6CLrpjhM4zZSZISsva3J0eIuMmOtuEi1AYDblesITEwRBL',
  access_token:         '1174214007647080449-GeFbiTnZB3nF8Nh2E7evqPgUR0I3fP',
  access_token_secret:  'UZXe9JfKFc509uTEyNo7vtelCZ6T69zlqLPTzu6enh6ip'
});

// 1 Search/tweets

router.route("/search").get((req, res) => {

T.get('search/tweets', { q: 'rainbow', count: 20 })
  .then(results => res.json(results))
  .catch(err => res.status(400).json("Error: " + err));
});





//3 user_timeline
router.route("/usertimeline").get((req, res) => {
  
  T.get('statuses/user_timeline', { screen_name: 'Crackillusion' } )
  .then(results => res.json(results))
  .catch(err => res.status(400).json("Error: " + err));
});


//4 savedsearchlist
router.route("/savedsearchlist").get((req, res) => {
  
  T.get('saved_searches/list' )
  .then(results => res.json(results))
  .catch(err => res.status(400).json("Error: " + err));
});


//5 friends/ids
router.route("/friendsid").get((req, res) => {
  
  T.get('friends/ids', { screen_name: 'Crackillusion' } )
  .then(results => res.json(results))
  .catch(err => res.status(400).json("Error: " + err));
});

//6 friends/list
router.route("/friendslist").get((req, res) => {
  
  T.get('friends/list', { screen_name: 'Crackillusion' } )
  .then(results => res.json(results))
  .catch(err => res.status(400).json("Error: " + err));
});


//7 account/settings 
router.route("/accountssettings").get((req, res) => {
  
  T.get('account/settings', { screen_name: 'Crackillusion' } )
  .then(results => res.json(results))
  .catch(err => res.status(400).json("Error: " + err));
});



//8 mutes/users/list
router.route("/mute").get((req, res) => {
  
  T.get("mutes/users/list")
    .then(results => res.json(results))
    .catch(err => res.status(400).json("Error: " + err));
});
//2 home_timeline

router.route("/hometimeline").get((req, res) => {
  
  T.get('statuses/home_timeline', { count: 10 } )
  .then(results => res.json(results))
  .catch(err => res.status(400).json("Error: " + err));
});
module.exports = router;
