const mongoose = require('mongoose');

const pingSchema = mongoose.Schema({
  questionTitle: String,
  // contentStreamType: String,
  createdByUserID: String,
  createdTime: String,
  active: Boolean
});

module.exports = mongoose.model('Ping', pingSchema);
