import * as builder from "botbuilder";
import { UniversalBot, IDialogWaterfallStep } from "botbuilder";

import { getTaylorAdorableHiCard, getTaylorExcitedCard } from "./../../gifs/taylorCards";

export const newUserWelcomeDialog: IDialogWaterfallStep[] = [
    async (session, args, next) => {

        const currentUserJSON = JSON.stringify((session as any).currentUser, undefined, 4);
        session.send(`You are: ${currentUserJSON}`);

        const message = new builder.Message(session)
          .addAttachment(getTaylorAdorableHiCard());
        session.send(message);

        next();
    },
    async (session, args, next) => {
        session.send(`Hey Theoderik! Have we met? I’m Taylor!`);
        next();
    },
    async (session, args, next) => {
        session.send(`I help Julian schedule time to assemble with superlative people like yourself.`);
        next();
    },
    async (session, args, next) => {
        session.send(`In fact, that's what I'm doing right now!`);
        next();
    },
    async (session, args, next) => {
        session.send(`Are you free Tuesday or Wednesday at 7pm EST?`);
        session.endDialogWithResult({});
    },
];