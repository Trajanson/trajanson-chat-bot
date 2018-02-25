import { IDialogWaterfallStep } from "botbuilder";
import { User, IUserModel } from "../../../models/utils/User";


export const rootDialog: IDialogWaterfallStep[] = [
    (session, args, next) => {

        const userAddress = session.message.address;
        const user = User.schema.statics.getOrCreateFromMSFTBotFrameworkAddress(userAddress);

        // (session as any).currentUser = user;

        // console.log("session", Object.keys(session));

        session.beginDialog("WelcomeUnknownUser");
        // if (false) {
        //     session.beginDialog("WelcomeKnownUser");
        // } else {
            // session.beginDialog("WelcomeUnknownUser");
        // }
    },
];
