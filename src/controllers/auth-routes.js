// ===============================================================================
// LOAD DEPENDENCY
// We are primarily interested in the user data and the jwt dependency for coding/decoding
// ===============================================================================

const express = require("express");
const mo = require("method-override");
const bp = require("body-parser");
const path = require("path");
const phs = require('password-hash-and-salt');
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

    User.findOne({'email': 'Q@Q.com'}).exec(function(err, userObj){
      const userHash = userObj.password;

      if (err){
        console.log('----------------');
        console.log(err);
        console.log('----------------');
        res.redirect('/');
      } else if (userObj === null) {
        console.log('----------------');
        console.log('User not found.');
        console.log('-----------------');
        res.send({});
      }
      else {
        phs(password).verifyAgainst(userHash, function(error, verified){
          if(error)
              throw new Error('There was an error while comparing hashes.');
          if (!verified) {
              console.log("Incorrect password.");
          } else {

              res.send(userObj);
              console.log("Access granted.");
          }
        });
      }
    });
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