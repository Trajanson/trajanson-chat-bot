import * as builder from "botbuilder";
import { ChatConnector, IAddress } from "botbuilder";
import { Express } from "express";

import { injectDialogues } from "./dialogues";

export const injectBot = (route: string, app: Express, connector: ChatConnector) => {
  app.post(route, connector.listen());

  const inMemoryStorage = new builder.MemoryBotStorage();

  const bot = new builder.UniversalBot(connector);
  bot.set("storage", inMemoryStorage);
  bot.set(`persistUserData`, true);

  injectDialogues(bot);

  // send simple notification
  const sendProactiveMessage = (address: IAddress) => {
    const message = new builder.Message().address(address);

    message.text("Hello, the Trajanson Bot has been deployed.");
    message.textLocale("en-US");
    bot.send(message);
  };

  const address = {"id": "mid.$cAAKTO2eCPcxmqKR7rVgd18zg9LdW", "channelId": "facebook", "user": {"id": "1755254141186727", "name": "Theoderik Trajanson"}, "conversation": {"isGroup": false, "id": "1755254141186727-724832851055215"}, "bot": {"id": "724832851055215", "name": "trajanson-chat-bot"}, "serviceUrl": "https://facebook.botframework.com"};
  setTimeout(() => {
    sendProactiveMessage(address);
   }, 5000);
};