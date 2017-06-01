// Include the Mongoose Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
  	type: String,
    required: true,
  },
  date: {
  	type: Date,
    required: true,
  },
  compounds: [Schema.Types.Mixed],
});

// Create the Model
const User = mongoose.model('User', UserSchema);

// Export it for use elsewhere
module.exports = User;