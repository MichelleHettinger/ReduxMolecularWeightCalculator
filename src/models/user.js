// Include the Mongoose Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
const UserSchema = new Schema({
  email: {
    type: String,
  },
  password: {
  	type: String,
  },
  date: {
  	type: Date,
  }
});

// Create the Model
const User = mongoose.model('User', UserSchema);

// Export it for use elsewhere
module.exports = User;