# ping-web-api
Web API for Ping
## Intent

The backend has about n parts to it.

- We need to create all our database models.

  ~~* Create a dev-test MongoDB instance. Connect to the dev db and begin using it~~  
  ( 0.25 )
  ~~* Install Mongoose, and use Mongoose to create all my database models.~~  
  ( 0.25, 0.50)


- We need to create our server logic in order to process data and make sure the right things are triggered.

  * Create server logic up to where data is passed at an endpoint.  
  ( 0.25, 1.00 )


- We need to set up our routes, tying our database models to our server logic.
  * Create an express app and set up necessary routes. // The functionality on killing the ping will need to be revised ( it is not simple )  
  (0.25, 1.00)


- Create a production database instance and connect to it.
( 0.25)

- There is also some application logic that need to be implemented. Subscriptions and event listeners on the front end. Set those up.
