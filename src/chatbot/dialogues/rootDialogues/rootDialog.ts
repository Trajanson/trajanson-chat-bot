import { IDialogWaterfallStep } from "botbuilder";


export const rootDialog: IDialogWaterfallStep[] = [
    (session, args, next) => {
        const userAddress = session.message.address;

        session.beginDialog("WelcomeUnknownUser");
        // if (false) {
        //     session.beginDialog("WelcomeKnownUser");
        // } else {
            // session.beginDialog("WelcomeUnknownUser");
        // }
    },
];
