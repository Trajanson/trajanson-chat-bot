import * as builder from "botbuilder";
import { ChatConnector, IAddress } from "botbuilder";
import { Express } from "express";

export const injectBot = (app: Express, connector: ChatConnector) => {
  app.post("/api/messages", connector.listen());

  const bot = new builder.UniversalBot(connector, (session, args) => {
    const savedAddress = session.message.address;

    session.send("Hi from new order with extracted server");
    session.send(`Your address is ${JSON.stringify(savedAddress)}`);
  });

  // send simple notification
  const sendProactiveMessage = (address: IAddress) => {
    const message = new builder.Message().address(address);

    console.log("ENTERED PROACTIVE MESSAGE SEND");

    message.text("Hello, this is another notification");
    message.textLocale("en-US");
    bot.send(message);
  };

  const address = {"id": "mid.$cAAKTO2eCPcxmqKR7rVgd18zg9LdW", "channelId": "facebook", "user": {"id": "1755254141186727", "name": "Theoderik Trajanson"}, "conversation": {"isGroup": false, "id": "1755254141186727-724832851055215"}, "bot": {"id": "724832851055215", "name": "trajanson-chat-bot"}, "serviceUrl": "https://facebook.botframework.com"};
  setTimeout(() => {
    sendProactiveMessage(address);
   }, 5000);
};