import * as builder from "botbuilder";
import { IDialogWaterfallStep } from "botbuilder";

import { getTaylorExcitedCard } from "./../../gifs/taylorCards";

export const proactiveWelcomeDialog: IDialogWaterfallStep[] = [
    (session, args, next) => {

        const message = new builder.Message(session)
            .addAttachment(getTaylorExcitedCard());
        session.send(message);


        session.send("Hey Theoderik! I'm SO excited to see you again!");
        // session.send("Hey Theoderik! Good to see you again! It's me Taylor!");
        // session.endDialogWithResult({ response: name.trim() });
        session.endDialogWithResult({});
    },
];