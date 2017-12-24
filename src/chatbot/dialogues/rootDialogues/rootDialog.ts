import { IDialogWaterfallStep } from "botbuilder";
// import { IUserRecord } from "./../../../models/User";

import { UserRecord } from "./../../../objectModels/User";

export const rootDialog: IDialogWaterfallStep[] = [
    (session, args, next) => {
        const userAddress = session.message.address;

        const userRecord = UserRecord.getFromSession(session);

        if (userRecord.hasMetBot()) {
            session.beginDialog("WelcomeKnownUser");
        } else {
            session.beginDialog("WelcomeUnknownUser");
        }
        session.endConversation(`That's all for now! Let's talk soon!`);
    },
];
