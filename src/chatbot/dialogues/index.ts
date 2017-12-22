import * as builder from "botbuilder";
import { UniversalBot } from "botbuilder";

export const injectDialogues = (bot: UniversalBot) => {
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