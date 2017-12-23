import * as builder from "botbuilder";
// import * as azure from "botbuilder-azure";

import { ChatConnector, IAddress } from "botbuilder";
import { Express } from "express";

import { injectDialogues } from "./dialogues";
import { sendFacebookMessageByUserID } from "./proactiveMessages/facebook";

const documentDbOptions = {
  host: process.env.MICROSOFT_DOCUMENT_DB_HOST_URL,
  masterKey: process.env.MMICROSOFT_DOCUMENT_DB_KEY,
  database: process.env.MICROSOFT_DOCUMENT_DB_DATABASE,
  collection: process.env.MICROSOFT_DOCUMENT_DB_COLLECTION,
};

// const docDbClient = new azure.DocumentDbClient(documentDbOptions);

// const cosmosStorage = new azure.AzureBotStorage({ gzipData: false }, docDbClient);


export const injectBot = (route: string, app: Express, connector: ChatConnector) => {
  app.post(route, connector.listen());

  const inMemoryStorage = new builder.MemoryBotStorage();

  const bot = new builder.UniversalBot(connector);
  bot.set("storage", inMemoryStorage);
  bot.set(`persistUserData`, true);

  injectDialogues(bot);

  setTimeout(() => {
    const card = new builder.AnimationCard()
    .title("Fearless!")
    .subtitle("Hello, the Trajanson Bot has been deployed.")
    .image(builder.CardImage.create(undefined, "https://media.giphy.com/media/l2ZDM3ZInkt6epPeU/giphy.gif"))
    .media([{
      url: "https://media.giphy.com/media/l2ZDM3ZInkt6epPeU/giphy.gif",
      profile: "1",
    }])
    ;

    const message = new builder.Message()
      // .address(address)
      .addAttachment(card);

    message.textLocale("en-US");
    sendFacebookMessageByUserID(bot, "1755254141186727", message);
   }, 5000);
};