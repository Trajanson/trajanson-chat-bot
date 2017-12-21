import * as builder from "botbuilder";
import { ChatConnector, IAddress } from "botbuilder";
import { Express } from "express";

export const injectBot = (app: Express, connector: ChatConnector) => {
  app.post("/api/messages", connector.listen());

  const bot = new builder.UniversalBot(connector, [(session, args, next) => {
    const userAddress = session.message.address;

    session.send("The bot is working");
    session.send(`Your address is ${JSON.stringify(userAddress)}`);

    const isKnownUser = false;
    if (isKnownUser) {
      session.beginDialog("knownUser");
    } else {
      session.beginDialog("unknownUser");
    }
    session.endConversation(`That's all for now! Let's talk soon!`);
  }]);

  bot.dialog("knownUser", [(session, args, next) => {
    session.send("Hey Theoderik! Have we met? I’m Taylor!");
    // session.endDialogWithResult({ response: name.trim() });
  session.endDialogWithResult({});
  }]);

  bot.dialog("unknownUser", [(session, args, next) => {
    session.send(`Hey Theoderik! Have we met? I’m Taylor!`);
    session.send(`I help Julian schedule time to assemble with superlative people like yourself. In fact, that's what I'm doing right now! Are you free Tuesday or Wednesday at 7pm EST?`);
    session.endDialogWithResult({});
  }]);


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