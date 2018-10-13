const mongoose = require('mongoose');


const pingContentObjectSchema = mongoose.Schema({
  pingID: String, // fk is ping._id
  content: String, // can either be text or an actually location depending on the contentStreamType of the ping with this.pingID
  placeInStack: Number,
  subcribeTime: Date,
  // timedOut: Boolean,
  createdByUserID: String,
  createdAtLatitude: Number,
  createdAtLongitude: Number,
  // createdAtCity: String,
  // createdAtState: String,
});

module.exports = mongoose.model('PingContentObject', pingContentObjectSchema);
