import * as builder from "botbuilder";
import { UniversalBot, IDialogWaterfallStep } from "botbuilder";

import { getTaylorAdorableHiCard, getTaylorExcitedCard } from "./../../gifs/taylorCards";

export const newUserWelcomeDialog: IDialogWaterfallStep[] = [
    async (session, args, next) => {

        const message = new builder.Message(session)
          .addAttachment(getTaylorAdorableHiCard());
        await session.send(message);


        setTimeout(async () => {
            await session.send(`Hey Theoderik! Have we met? I’m Taylor!`);
            await session.send(`I help Julian schedule time to assemble with superlative people like yourself.`);
            await session.send(`In fact, that's what I'm doing right now!`);
            await session.send(`Are you free Tuesday or Wednesday at 7pm EST?`);

            session.endDialogWithResult({});
        }, 7000);

    },
];