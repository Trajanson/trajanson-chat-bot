import * as builder from "botbuilder";

import * as express from "express";

import * as errorHandler from "errorhandler";

import { injectBot } from "./chatbot";

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

app.post("/api/messages", connector.listen());

injectBot(connector);