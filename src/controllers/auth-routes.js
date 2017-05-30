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

  //After entering user name and password and clicking submit, they are brought to this route
  app.get('/authenticate/:email/:password', function(req, res) {
    //start decrypting here
    const encodedEmail = req.params.email;
    const encodedPassword = req.params.password;
    const encryptedEmail = decodeURIComponent(encodedEmail);
    const encryptedPassword = decodeURIComponent(encodedPassword);

    const email = CryptoJS.AES.decrypt(encryptedEmail, 'michelle is awesome').toString(CryptoJS.enc.Utf8);
    const password = CryptoJS.AES.decrypt(encryptedPassword, 'michelle is totally awesome').toString(CryptoJS.enc.Utf8);

    const userCredentials = {
      userEmail: email,
      userPassword: password,
    };

    User.findOne({'email': email}).exec(function(err, userObj){

      //an error happens with userObj.password, where if someone logs in with an existing email, the server crashes because userObj.password doesn't exist
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
        const userHash = userObj.password;
        phs(password).verifyAgainst(userHash, function(error, verified){
          if(error)
              throw new Error('There was an error while comparing hashes.');
          if (!verified) {
              console.log('-----------------');
              console.log("Incorrect password.");
              console.log('-----------------');
              res.send({});
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

  //When a user signs up, they are verified and redirected to /home with good cookie

  app.post('/register/:email/:password', function(req, res) {
    //start decrypting here
    const encodedEmail = req.params.email;
    const encodedPassword = req.params.password;
    const encryptedEmail = decodeURIComponent(encodedEmail);
    const encryptedPassword = decodeURIComponent(encodedPassword);

    const userEmail = CryptoJS.AES.decrypt(encryptedEmail, 'michelle is awesome').toString(CryptoJS.enc.Utf8);
    const userPassword = encryptedPassword;

    const user = new User({
      email: userEmail,
      password: userPassword
    })

    user.save(function(err, newUserObj) {
      if (err){
        console.log('----------------');
        console.log(err);
        console.log('----------------');
        res.redirect('/');
      } else {
        res.send(newUserObj);
      }
    });
  });
}