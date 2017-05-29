const express = require("express");
const path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

  // HTML GET Requests
  // Below code handles when users "visit" a page. 
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  //Root, where users log in or sign up
  app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './src/public/index.html'));
  });


}