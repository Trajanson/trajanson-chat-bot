import * as builder from "botbuilder";
import { UniversalBot } from "botbuilder";

export const injectDialogues = (bot: UniversalBot) => {
    bot.dialog("/", [(session, args, next) => {
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

};