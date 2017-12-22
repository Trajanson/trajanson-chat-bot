import * as builder from "botbuilder";
import { UniversalBot } from "botbuilder";
import { IUserRecord } from "./../../models/User";
import { defaultUserRecord, updateHasMetBot } from "./../../models/User/index";

export const injectDialogues = (bot: UniversalBot) => {
    bot.dialog("/", [(session, args, next) => {
        const userAddress = session.message.address;

        const userRecord: IUserRecord = session.userData.record;
        if (!userRecord) {
            session.userData.record = defaultUserRecord;
            session.save();
        }
        // session.send(`Your address is ${JSON.stringify(userAddress)}`);

        if (userRecord && userRecord.hasMetBot) {
          session.beginDialog("knownUser");
        } else {
          session.beginDialog("unknownUser");
        }
        session.endConversation(`That's all for now! Let's talk soon!`);
    }]);

    bot.dialog("knownUser", [(session, args, next) => {

        session.send("Hey Theoderik! Good to see you again! It's me Taylor!");
        // session.endDialogWithResult({ response: name.trim() });
      session.endDialogWithResult({});
      }]);

      bot.dialog("unknownUser", [(session, args, next) => {
        const userRecord: IUserRecord = session.userData.record;

        session.send(`Hey Theoderik! Have we met? I’m Taylor!`);
        session.send(`I help Julian schedule time to assemble with superlative people like yourself. In fact, that's what I'm doing right now! Are you free Tuesday or Wednesday at 7pm EST?`);

        session.userData.record = updateHasMetBot(userRecord, true);
        session.save();

        session.endDialogWithResult({});
      }]);

};