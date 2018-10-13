const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();


const fs = require('fs');
const path = require('path');

const modelsPath = path.resolve(__dirname, 'api/models')
fs.readdirSync(modelsPath).forEach(file => {
  require(modelsPath + '\\' + file);
  console.log(modelsPath + '\\' + file);
})


// const models = require('./api/models');
// const api_routes = require('api/routes');
// app.use('/api', api_routes);

/*
  Setting up this local MongoDB instance was not
  as simple as I feel it should be.
  res: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#start-mdb-edition-as-a-windows-service
*/

const test = function(){
  mongoose.connect('mongodb://127.0.0.1:27017');
  var db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(){
    console.log("Conection Success!");
  })

  var user = new User({
    username: "JhonnyBoi",
    email: "jhonnyboi@hotmail.com",
    password: "jbbb",
    lastActive: Date.now(),
  });

  var ping = new Ping({
    questionTitle: "What is your favorite fruit?",
    // contentStreamType: String,
    createdByUserID: User.findOne()._id,
    createdTime: Date.now(),
    active: true,
  });

  var pingContentObject = new PingContentObject({
    pingID: Ping.findOne()._id, // fk is ping._id
    content: "Watermelon", // can either be text or an actually location depending on the contentStreamType of the ping with this.pingID
    placeInStack: 0, // find max(placeInStack) where pingId is same as this document, add 1 to that number
    subcribeTime: Date.now(),
    // timedOut: Boolean,
    createdByUserID: User.findOne()._id,
    createdAtLatitude: 0.324342,
    createdAtLongitude: 23.32342,
  });

  var subscription = new Subscription({
    pingID: Ping.findOne()._id,
    userID: User.findOne()._id,
    subscriptionTime: Date.now(),
    prevUserID: Users.findOne()._id
  });

}

test();

// Create server logic up to where data is passed in at an endpoint
// .50
/*
  User can send a ping:
    - At the applcation level a ping object is summoned up, and sent with it is the User that summoned it ( i.e. and that users location)
    * Create an endpoint that recieves a ping object and posts it to the database
    - The server recives the data and post it to the database and then starts a content stream ( posts to ping, userRT, contentstream and pingSubscribers)
    - The server uses the location of the user who made the post request and searches in the database for the nearest users
      try ( select where userRt.city == postingUser.city) for the first 40 results calculate distance to postingUser by iterating through the rows, and create an array with ids and distances, get the id corresponding to the lowest distances  ( select coords, userid from users / usersRT  )
    - The server updates the ping subcribers table to show that the user has been subscribed.
    - At the application level the user detects a change in the pinglist being served to him.
    - This change sets a counter that will resovlve in two ways:
      - The user opens the ping (if adds some content 'string' ), and then the ping is passed on just as before ( location and ping information sent )
      -
*/
//
// const fakeNewPing = {
//   data: {
//     user: {
//       id: "kldajf234132423",
//       latitude: "-30.34132423",
//       longitude: "100.3413423",
//       city: "Gainesville",
//       state: "Florida", // city and state are probably inferred values
//       lastActive: Date.now()
//     },
//     ping: {
//       questionTitle: "What's your favorite color?"
//       contentStreamType: "string",
//       contentLocation: "Blue is my favorite color."
//       createdByUserID: user.id, // inferred value, as it should be
//       createdTime: Date.now()
//     }
//   }
// };
//
// function simulateNewPingFromMobileDevice(simulated_request){
//   // receives a ping object and a associated user, post that to relevant database tables
//
// }
//
// app.post('/',
//   (req, res) => {
//     // this needs to be
//     const userRT = new userRT({
//       latitude: req.body.user.longitude,
//       longitude: req.body.user.latitide,
//       city: req.body.user.city, // inferred from coords
//       state: req.body.user.city, // also inferred frm coords
//       userID: req.body.user.id,
//       lastActive: req.body.user.lastActive
//     });
//     userRT
//     .save()
//     .then( result => console.log(result))
//     .catch(error){ console.log(error) }
//     } // handle errors
//
//     const ping = new Ping({
//       questionTitle: req.body.ping.questionTitle,
//       contentStreamType: req.body.ping.contentStreamType,
//       createdByUser: req.body.ping.createdByUserID,
//       createTime: req.body.ping.createdTime,
//       active: true
//     });
//
//     ping
//     .save()
//     .then( result => console.log(result))
//     .catch(error){ console.log(error) }
//
//     const contentStreamObject = new ContentStreamObject({
//       pingID: Ping.findOne({"questionTitle": req.body.ping.questionTitle }), // fk is ping._id
//       contentLocation: req.body.ping.contentLocation, // can either be text or an actually location depending on the contentStreamType of the ping with this.pingID
//       placeInStack: 0, // the last one plus  contentStreamObject.find().where(pingID==this.pingID).sort(decreasing).getFirst()
//       subcribeTime: req.body.ping.createdTime,
//       timedOut: false,
//       prevUserID: undefined
//     });
//     contentStreamObject
//     .save()
//     .then( result => console.log(result))
//     .catch(error){ console.log(error) }
//   });
//
//
// app.get('/',
//   (req, res) => res.status(200).json({
//     data: "some_data"
//   })
// );
//
// app.listen(3000, () => console.log('Application Running...') );
//
// module.exports = app;
