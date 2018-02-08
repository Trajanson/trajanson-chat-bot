import { IDialogWaterfallStep } from "botbuilder";
import { User, IUserModel } from "../../../models/utils/User";


export const rootDialog: IDialogWaterfallStep[] = [
    (session, args, next) => {
        const userAddress = session.message.address;

        console.log("userAddress", userAddress);

        console.log("User", User);
        let user: IUserModel;
        switch (userAddress.channelId) {
            case "facebook":
                console.log("this is a facebook user");
                user = (User as any).getOrCreateFromFacebook(userAddress);
                break;
            case "sms":
                console.log("this is an sms user");
                user = (User as any).getOrCreateFromPhoneNumber(userAddress);
                break;
            default:
                break;
        }

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
