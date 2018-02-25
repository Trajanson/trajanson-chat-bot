import * as builder from "botbuilder";
import { UniversalBot, IDialogWaterfallStep } from "botbuilder";

import { getTaylorAdorableHiCard, getTaylorExcitedCard } from "./../../gifs/taylorCards";

export const newUserWelcomeDialog: IDialogWaterfallStep[] = [
    async (session, args, next) => {
        session.sendTyping();

        const message = new builder.Message(session)
          .addAttachment(getTaylorAdorableHiCard());
        session.send(message);

        next();
    },
    async (session, args, next) => {
        session.sendTyping();
        session.send(`Hey Theoderik! Have we met? I’m Taylor!`);
        next();
    },
    async (session, args, next) => {
        session.sendTyping();
        session.send(`I help Julian schedule time to assemble with superlative people like yourself.`);
        next();
    },
    async (session, args, next) => {
        session.sendTyping();
        session.send(`In fact, that's what I'm doing right now!`);
        next();
    },
    async (session, args, next) => {
        session.sendTyping();
        session.send(`Are you free Tuesday or Wednesday at 7pm EST?`);
        session.endDialogWithResult({});
    },
];