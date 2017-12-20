import * as builder from "botbuilder";

import * as express from "express";

import * as errorHandler from "errorhandler";

// const app = require("./app");

// Create Express server
const app = express();

/**
 * Error Handler. Provides full stack - remove for production
 */
// app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(process.env.PORT, () => {
  console.log(("  App is running at http://localhost:%d in %s mode"), process.env.PORT, process.env.ENV);
  console.log("  Press CTRL-C to stop\n");
});

export = server;

const connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD,
  openIdMetadata: process.env.BotOpenIdMetadata,
});

app.get("/", (req, res) => {
  res.write("(200)\nSite is operational.");
  res.end();
});

// app.get("/api/messages", (req, res) => {
//   const facebookVerifyToken = process.env.FACEBOOK_VERIFY_TOKEN;

//   // Parse the query params
//   const mode = req.query["hub.mode"];
//   const token = req.query["hub.verify_token"];
//   const challenge = req.query["hub.challenge"];

//   console.log("mode", mode);
//   console.log("token", token);

//   console.log("challenge", challenge);

//   // Checks if a token and mode is in the query string of the request
//   if (mode && token) {

//     // Checks the mode and token sent is correct
//     if (mode === "subscribe" && token === facebookVerifyToken) {

//       // Responds with the challenge token from the request
//       res.status(200).send(challenge);

//     } else {
//       // Responds with '403 Forbidden' if verify tokens do not match
//       res.sendStatus(403);
//     }
//   }

//   res.sendStatus(200);
//   res.end();
// });

app.post(
  "/api/messages",
  (req, res, next) => {
    console.log("THIS WAS HIT");
    next();
  },
  connector.listen()
);
// app.post("/api/messages", connector.listen());

// Create your bot with a function to receive messages from the user
// const bot = new builder.UniversalBot(connector);

// bot.dialog("/", (session) => {
//   session.send("HIT!!!");
// });


const bot = new builder.UniversalBot(connector, (session) => {
  session.send("Hi");
});
