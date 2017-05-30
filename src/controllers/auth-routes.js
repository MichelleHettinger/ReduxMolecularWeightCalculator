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
const CryptoJS = require("crypto-js");

module.exports = function(app){
  // Authentication
  app.get('/authenticate/:email/:password', function(req, res){

    //start decrypting here
    const encryptedEmail = req.params.email;
    const encryptedPassword = req.params.password;

    const email = CryptoJS.DES.decrypt(encryptedEmail, 'michelle is awesome').toString(CryptoJS.enc.Utf8);
    const password = CryptoJS.DES.decrypt(encryptedPassword, 'michelle is totally awesome').toString(CryptoJS.enc.Utf8);

    const userCredentials = {
      userEmail: email,
      userPassword: password,
    };

    User.findOne({'email': email}).exec(function(err, userObj){
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
              console.log('-----------------');
              console.log("Incorrect password.");
              console.log('-----------------');
          } else {
              console.log('-----------------');
              console.log("Access granted.");
              console.log('-----------------');
              res.send(userObj);
          }
        });
      }
    });
  });
}