import { IDialogWaterfallStep, IDialogState } from "botbuilder";
import { User, IUserModel } from "../../../models/utils/User";
import { adminRootRoute } from "..";


export const attemptAdminDialog: IDialogWaterfallStep = async (session, args, next) => {
    // const userAddress = session.message.address;
    // const user = await User.schema.statics.getOrCreateFromMSFTBotFrameworkAddress(userAddress);

    session.send("RECEIVED!");
    // if (user.roles.isSuperUser) {
    //     const messageText = session.message.text;
    //     session.beginDialog(adminRootRoute, messageText);
    // } else {
    //     next();
    // }
};

export const rootDialog: IDialogWaterfallStep[] = [
    attemptAdminDialog,
    async (session, args, next) => {
        console.log("This comes from the 2nd waterfall step of the root dialog");

        // const userAddress = session.message.address;
        // const user = User.schema.statics.getOrCreateFromMSFTBotFrameworkAddress(userAddress);

        // session.beginDialog("WelcomeUnknownUser");

        // (session as any).currentUser = user;

        // console.log("session", Object.keys(session));

        // if (false) {
        //     session.beginDialog("WelcomeKnownUser");
        // } else {
            // session.beginDialog("WelcomeUnknownUser");
        // }
    },
];
