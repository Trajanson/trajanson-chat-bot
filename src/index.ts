import * as builder from "botbuilder";

import { injectBot } from "./chatbot";
import { app } from "./appServer";

const connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD,
  openIdMetadata: process.env.BotOpenIdMetadata,
});

injectBot("/api/messages", app, connector);