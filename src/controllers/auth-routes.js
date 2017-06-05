const phs = require('password-hash-and-salt');
const User = require("../models/user.js");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken'); 

module.exports = function(app){

  //After entering user name and password and clicking submit, they are brought to this route
  app.get('/authenticate/:encodedEmail/:encodedPassword', function(req, res) {
    //start decrypting here
    const email = decodeURIComponent(req.params.encodedEmail);
    const encryptedPassword = decodeURIComponent(req.params.encodedPassword);
    const whatUserTyped = CryptoJS.AES.decrypt(encryptedPassword, 'michelle is totally awesome').toString(CryptoJS.enc.Utf8);

    const userInfo = {
      username: email,
      password: whatUserTyped,
    };

    User.findOne({'email': email}).exec(function(err, userObj){
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
        const userSavedHash = userObj.password;

        phs(whatUserTyped).verifyAgainst(userSavedHash, function(error, verified){
          if(error)
              throw new Error('There was an error while comparing hashes.');
              //This error crashes the server. Make sure to come back and handle it.
          if (!verified) {
              console.log('-----------------');
              console.log("Incorrect password.");
              console.log('-----------------');
              res.send({});
          } else {
              console.log('-----------------');
              console.log("Access granted.");
              console.log('-----------------');

              // We use jwt to "sign" a web token, using the secret we created in server.js
              const token = jwt.sign(userInfo, app.get('jwtSecret'), {
                  expiresIn: 1440 // Token is given but will expire in 24 minutes (requiring a re-login)
              });

              const userWithToken = {token, userObj};
              res.send(userWithToken);
          }
        });
      }
    });
  });

  app.post('/register/:encodedEmail/:encodedHash', function(req, res) {
    //start decrypting here
    const userEmail = decodeURIComponent(req.params.encodedEmail);
    const hash = decodeURIComponent(req.params.encodedHash);

    const user = new User({
      email: userEmail,
      password: hash,
      date: Date.now(),
      compounds: [],
    });

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

  // ------------------------------------------------------------------------------------------------------
  // GET/POST - This route checks token for all subsequent queries (in our case all the api queries)
  // ------------------------------------------------------------------------------------------------------
  // By saying app.all (all routes will pass through here. If they meet the requirement for a token then they are "next"ed to the next route option).


  // IMPORTANT #3
  // ============
  // app.all('*'): every entry into the site that proceeds this route file
  // app.all('*', function(req, res, next) {

  //   const cookie = req.headers.cookie;
  //   const token = cookie.split('=')[1];

  //   jwt.verify(token, app.get('jwtSecret'), function(err, decoded) {
  //     if (err) {
  //       // if it's a bad cookie, tell console (debugging)
  //       console.log("bad cookie");
  //       // return error if there is one
  //       return res.json({success: false, message: "access denied. Bro. Did you even send me a token?"})
  //     }
  //     else {
  //       console.log("good cookie");
  //       next();
  //     }
  //   });
  // });
}