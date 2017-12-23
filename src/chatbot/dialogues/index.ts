import * as builder from "botbuilder";
import { UniversalBot, IDialogWaterfallStep } from "botbuilder";
import { IUserRecord } from "./../../models/User";
import { defaultUserRecord, updateHasMetBot } from "./../../models/User/index";

const rootDialog: IDialogWaterfallStep[] = [
    (session, args, next) => {
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
    },
];

const knownUserDialog: IDialogWaterfallStep[] = [
    (session, args, next) => {
        session.send("Hey Theoderik! Good to see you again! It's me Taylor!");
        // session.endDialogWithResult({ response: name.trim() });
        session.endDialogWithResult({});
    },
];

const unknownUserDialog: IDialogWaterfallStep[] = [
    (session, args, next) => {
        const userRecord: IUserRecord = session.userData.record;

        const card = new builder.AnimationCard()
        // .title("Fearless!")
        // .subtitle("Hello, the Trajanson Bot has been deployed.")
        .image(builder.CardImage.create(session, "https://media.giphy.com/media/YF1pE6d3JJIkM/giphy.gif"))
        .media([{
          url: "https://media.giphy.com/media/YF1pE6d3JJIkM/giphy.gif",
          profile: "1",
        }])
        ;

        const message = new builder.Message(session)
          .addAttachment(card);

        session.send(message);

        session.send(`Hey Theoderik! Have we met? I’m Taylor!`);
        session.send(`I help Julian schedule time to assemble with superlative people like yourself. In fact, that's what I'm doing right now! Are you free Tuesday or Wednesday at 7pm EST?`);

        session.userData.record = updateHasMetBot(userRecord, true);
        session.save();

        session.endDialogWithResult({});
    },
];


export const injectDialogues = (bot: UniversalBot) => {
    bot.dialog("/", rootDialog);

    bot.dialog("knownUser", knownUserDialog);

    bot.dialog("unknownUser", unknownUserDialog);

};