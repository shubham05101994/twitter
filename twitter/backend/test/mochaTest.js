/**
 * This file is to test twitter apis
 */
var expect = require("chai").expect;
var request = require("request"); 
//var twitter = require("../backend/route/twitt");

//let url = "http://localhost:5000/";

it("Successfully navigated to Search API", function() {
    request("http://localhost:5000/twitt/search", function(error, response, body) {
      //console.log(response.statusCode);
      expect(response.statusCode).to.equal(200);
      expect(response.body).not.null;
      //console.log("response : "+response);
    });
});

it("Successfully navigated to hometimeline API", function() {
  request("http://localhost:5000/twitt/hometimeline", function(error, response, body) {
    //console.log(response.statusCode);
    expect(response.statusCode).to.equal(200);
    expect(response.body).not.null;
    //console.log("response : "+response);
  });
});
it("Successfully navigated to usertimeline API", function() {
  request("http://localhost:5000/twitt/usertimeline", function(error, response, body) {
    //console.log(response.statusCode);
    expect(response.statusCode).to.equal(200);
    expect(response.body).not.null;
    //console.log("response : "+response);
  });
});
it("Successfully navigated to savedsearchlist API", function() {
  request("http://localhost:5000/twitt/savedsearchlist", function(error, response, body) {
    //console.log(response.statusCode);
    expect(response.statusCode).to.equal(200);
    expect(response.body).not.null;
    //console.log("response : "+response);
  });
});
it("Successfully navigated to friendsid API", function() {
  request("http://localhost:5000/twitt/friendsid", function(error, response, body) {
    //console.log(response.statusCode);
    expect(response.statusCode).to.equal(200);
    expect(response.body).not.null;
    //console.log("response : "+response);
  });
});
it("Successfully navigated to friendslist API", function() {
  request("http://localhost:5000/twitt/friendslist", function(error, response, body) {
    //console.log(response.statusCode);
    expect(response.statusCode).to.equal(200);
    expect(response.body).not.null;
    //console.log("response : "+response);
  });
});
it("Successfully navigated to accountssettings API", function() {
  request("http://localhost:5000/twitt/accountssettings", function(error, response, body) {
    //console.log(response.statusCode);
    expect(response.statusCode).to.equal(200);
    expect(response.body).not.null;
    //console.log("response : "+response);
  });
});
it("Successfully navigated to mute API", function() {
  request("http://localhost:5000/twitt/mute", function(error, response, body) {
    //console.log(response.statusCode);
    expect(response.statusCode).to.equal(200);
    expect(response.body).not.null;
    //console.log("response : "+response);
  });
});