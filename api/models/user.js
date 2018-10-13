const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  lastActive: Date,
   // needs to be hashed
  // security_question: String,  // this is actually not suppose to be here, it needs it's own table.
});

exports.User = mongoose.model('User', userSchema);





// const mongoose = require('mongoose');
// const pingSubscribers = mongoose.Schema({
//   pingId: String,
//   userID: String,
//   subscribeTime: Date,
//   timedOut: Boolean,
//   prevUserID: String
// })
