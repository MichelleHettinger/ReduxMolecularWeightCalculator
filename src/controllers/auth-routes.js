// ===============================================================================
// LOAD DEPENDENCY
// We are primarily interested in the user data and the jwt dependency for coding/decoding
// ===============================================================================

const express = require("express");
const mo = require("method-override");
const bp = require("body-parser");
const path = require("path");

const User = require("../models/user.js");

// bring in our Cookies library, so we can send the user the web token
const Cookies = require('cookies');
// JWT used to create, sign, and verify auth tokens
const jwt = require('jsonwebtoken');

module.exports = function(app){
  // Authentication
  app.get('/authenticate/:email/:password', function(req, res){

    const email = req.params.email;
    const password = req.params.password;

    console.log(email);
    console.log(password);

    if (email == null) {console.log('no email')}

    User.findOne({$and:[{"email":email}, {"password":password}]}).exec(function(err, user){
      if (err){
        console.log('--------');
        console.log(err);
        console.log('--------');
        res.redirect('/');
      }
      else if (user === null) {
        console.log('--------');
        console.log('User not found.');
        console.log('--------');
        res.send({});
      }
      else {
        res.send(user);
      }
    })
  });

  // ------------------------------------------------------------------------------------------------------
  // GET/POST - This route checks token for all subsequent queries (in our case all the api queries)
  // ------------------------------------------------------------------------------------------------------
  // By saying app.all (all routes will pass through here. If they meet the requirement for a token then they are "next"ed to the next route option).

  // IMPORTANT #3
  // ============
  // app.all('*'): every entry into the site that proceeds this route file
  app.all('*', function(req, res, next) {

      console.log("-------")
      console.log(req.headers);

      let cookieToken = req.headers.cookie;
      let cookieArray = cookieToken.split("--");
      let userID = cookieArray[0];

      // IMPORTANT #4
      // ============

      // We define a token variable and grab the cookie from our user.
      // Remember, we named it "access_token", and that's what we ".get" from our user
      const token = new Cookies(req, res).get(userID+"--token");

      // log the token so we can view it in the console
      // (don't do this on a real app, this log is for demo purposes)
      // console.log("Token: " + token);


      // IMPORTANT #5
      // ============
      // Now that we grabbed the token from our cookie,
      // we can pass it to jwt, which check that it matches our site's

      // jwtSecret (set in server.js)
      jwt.verify(token, app.get('jwtSecret'), function(err, decoded) {
          if (err) {
              // if it's a bad cookie, tell console (debugging)
              console.log("bad cookie");
              // return error if there is one
              return res.json({success: false, message: "access denied. Bro. Did you even send me a token?"})
          }
          else {
              // if it's a good cookie, tell console (debugging)
              console.log("good cookie");


              // IMPORTANT #6
              // ============
              // Without this next() call here, we can't tell the server
              // to move onto the API routes when the user has a good cookie.
              next();
          }
      });
  });

}