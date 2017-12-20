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

console.log("process.env.MICROSOFT_APP_ID", process.env.MICROSOFT_APP_ID);
console.log("process.env.MICROSOFT_APP_PASSWORD", process.env.MICROSOFT_APP_PASSWORD);

app.post("/api/messages", connector.listen());

// Create your bot with a function to receive messages from the user
const bot = new builder.UniversalBot(connector);

bot.dialog("/", (session) => {
  session.send("HIT!!!");
});