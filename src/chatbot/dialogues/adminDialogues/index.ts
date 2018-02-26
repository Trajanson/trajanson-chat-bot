import * as builder from "botbuilder";
import { IDialogWaterfallStep } from "botbuilder";
import { requestToInviteUserRoute } from "..";

export const adminRootDialog: IDialogWaterfallStep[] = [
    (session, args, next) => {

        console.log("admin root route");
        console.log("args", JSON.stringify(args));
        if (args === "I want to add a user") {
            session.replaceDialog(requestToInviteUserRoute);
        } else {
            session.send("You're an admin!");
            session.endDialogWithResult({});
        }
    },
];