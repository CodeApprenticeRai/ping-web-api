const mongoose = require('mongoose');

const subscriptionSchema = mongoose.Schema({
  pingID: String,
  userID: String,
  subscriptionTime: Date,
  prevUserID: String
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
