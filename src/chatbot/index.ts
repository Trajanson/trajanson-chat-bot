import * as builder from "botbuilder";
// const azure = require("botbuilder-azure/lib/botbuilder-azure.js");

import { ChatConnector, IAddress, UniversalBot } from "botbuilder";
import { Express } from "express";

import { injectDialogues } from "./dialogues";
import { sendFacebookMessageByUserID } from "./proactiveActions/messages/facebook";

import { getTaylorInPoolCard } from "./gifs/taylorCards";
import { BotSingleton } from "./../chatbot/BotSingleton";
import { botMiddleware } from "../chatbot/middleware";
import { sendTextMessageByPhoneNumber } from "./proactiveActions/messages/textMessage";
import { rootDialog } from "./dialogues/rootDialogues/rootDialog";
import { sendEmulatorMessageByUserID } from "./proactiveActions/messages/emulator";

// const documentDbOptions = {
//   host: process.env.MICROSOFT_DOCUMENT_DB_HOST_URL,
//   masterKey: process.env.MICROSOFT_DOCUMENT_DB_KEY,
//   database: process.env.MICROSOFT_DOCUMENT_DB_DATABASE,
//   collection: process.env.MICROSOFT_DOCUMENT_DB_COLLECTION,
// };

// const docDbClient = new azure.DocumentDbClient(documentDbOptions);

// const cosmosStorage = new azure.AzureBotStorage({ gzipData: false }, docDbClient);

const sendBootMessage = () => {
  const card = getTaylorInPoolCard()
    .title("Head First, Fearless!")
    .subtitle("Hello, the Trajanson Bot has been deployed.");

  const message = new builder.Message()
    .addAttachment(card);

  const bot: UniversalBot = BotSingleton.getBot();
  sendFacebookMessageByUserID(bot, "1755254141186727", message);
  // sendEmulatorMessageByUserID(bot, "default-user", message);
};

export const injectBot = (route: string, app: Express, connector: ChatConnector) => {
  app.post(route, connector.listen());

  const bot = new builder.UniversalBot(connector, rootDialog);
  BotSingleton.setBot(bot);

  // bot.set("storage", cosmosStorage);
  // bot.set(`persistUserData`, true);

  // Middleware for logging
  bot.use(botMiddleware);

  injectDialogues(bot);

  setTimeout(() => sendBootMessage(), 100);
};
