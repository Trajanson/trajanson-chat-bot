import * as builder from "botbuilder";
import { UniversalBot, IDialogWaterfallStep } from "botbuilder";

import { getTaylorAdorableHiCard, getTaylorExcitedCard } from "./../../gifs/taylorCards";

export const newUserWelcomeDialog: IDialogWaterfallStep[] = [
    (session, args, next) => {

        const message = new builder.Message(session)
          .addAttachment(getTaylorAdorableHiCard());
        session.send(message);


        setTimeout(() => {
            session.send(`Hey Theoderik! Have we met? I’m Taylor!`);
            session.send(`I help Julian schedule time to assemble with superlative people like yourself.`);
            session.send(`In fact, that's what I'm doing right now!`);
            session.send(`Are you free Tuesday or Wednesday at 7pm EST?`);

            session.endDialogWithResult({});
        }, 7000);

    },
];