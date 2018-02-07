import * as builder from "botbuilder";
// const azure = require("botbuilder-azure/lib/botbuilder-azure.js");

import { ChatConnector, IAddress, UniversalBot } from "botbuilder";
import { Express } from "express";

import { injectDialogues } from "./dialogues";
import { sendFacebookMessageByUserID } from "./proactiveMessages/facebook";

import { getTaylorInPoolCard } from "./gifs/taylorCards";
import { BotSingleton } from "./../chatbot/BotSingleton";

// const documentDbOptions = {
//   host: process.env.MICROSOFT_DOCUMENT_DB_HOST_URL,
//   masterKey: process.env.MICROSOFT_DOCUMENT_DB_KEY,
//   database: process.env.MICROSOFT_DOCUMENT_DB_DATABASE,
//   collection: process.env.MICROSOFT_DOCUMENT_DB_COLLECTION,
// };

// const docDbClient = new azure.DocumentDbClient(documentDbOptions);

// const cosmosStorage = new azure.AzureBotStorage({ gzipData: false }, docDbClient);

const sendBootMessage = (bot: UniversalBot) => (() => {
  console.log("HIT");
  const card = getTaylorInPoolCard()
    .title("Head First, Fearless!")
    .subtitle("Hello, the Trajanson Bot has been deployed.");

  const message = new builder.Message()
    .addAttachment(card);

  sendFacebookMessageByUserID(bot, "1755254141186727", message);
});

export const injectBot = (route: string, app: Express, connector: ChatConnector) => {
  app.post(route, connector.listen());

  const bot = new builder.UniversalBot(connector);

  BotSingleton.setBot(bot);
  // bot.set("storage", cosmosStorage);
  // bot.set(`persistUserData`, true);

  injectDialogues(bot);

  setTimeout(sendBootMessage(bot), 100);
};
