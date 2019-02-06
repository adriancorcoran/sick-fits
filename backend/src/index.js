// let's go!
// entry point into application

// need env variables
require("dotenv").config({ path: "variables.env" });
// get the create server function
const createServer = require("./createServer");
// get the db
const db = require("./db");
// create the server
const server = createServer();

// TODO: use express middleware to handle cookies (JWT)
// TODO: use express middleware to populate current user

// start the server
server.start(
  {
    cors: {
      credentials: true, // must be logged in
      origin: process.env.FRONTEND_URL // can only be accessed from our front end url
    }
  },
  deets => {
    console.log(`Server is now running on http://localhost:${deets.port} `);
  }
);
