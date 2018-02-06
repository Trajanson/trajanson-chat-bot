import * as builder from "botbuilder";
import { UniversalBot, IDialogWaterfallStep } from "botbuilder";

import { rootDialog } from "./rootDialogues/rootDialog";
import { newUserWelcomeDialog } from "./rootDialogues/newUserWelcomeDialog";
import { returningUserDialog } from "./rootDialogues/returningUserDialog";

import { getTaylorAdorableHiCard, getTaylorExcitedCard } from "./../gifs/taylorCards";

export const injectDialogues = (bot: UniversalBot) => {
    bot.dialog("/", rootDialog);

    bot.dialog("WelcomeKnownUser", returningUserDialog);

    bot.dialog("WelcomeUnknownUser", newUserWelcomeDialog);

    // bot.dialog("LaughDialogue", [(session, args, next) => {
    //     session.send("hahaha");
    //     session.endDialogWithResult({});
    // }]).triggerAction({
    //     matches: /^lol$/i,
    //     onSelectAction: (session, args) => {
    //         session.beginDialog(args.action, args);
    //     },
    // });

    // bot.dialog("Help", [
    //     (session, args, next) => {
    //         let message = "";
    //         switch (args.action) {
    //             case "AddNumber":
    //                 message = "You can either type the next number, or use **total** to get the total.";
    //                 break;
    //             default:
    //                 message = "You can type **add** to add numbers.";
    //                 break;
    //         }
    //         session.endDialog(message);
    //     }
    // ]).triggerAction({
    //     matches: /^help/i,
    //     onSelectAction: (session, args) => {
    //         session.beginDialog(args.action, args);
    //     }
    // });


};