import { IDialogWaterfallStep } from "botbuilder";
import * as builder from "botbuilder";
import { getTaylorAdorableHiCard } from "../../../gifs/taylorCards";
import { User } from "../../../../models/utils/User";


export const invitingNewUserDialog: IDialogWaterfallStep[] = [
    async (session, args, next) => {
        console.log("YOU REACHED THIS!");
        session.send("YOU REACHED THIS!");
        // session.sendTyping();

        // const message = new builder.Message(session)
        //     .addAttachment(getTaylorAdorableHiCard());
        // session.send(message);

        // next();
    },
    // async (session, args, next) => {
    //     const userAddress = session.message.address;
    //     const user = await User.schema.statics.getOrCreateFromMSFTBotFrameworkAddress(userAddress);

    //     session.sendTyping();
    //     session.send(`Hey ${user.firstName}! Have we met? I’m Taylor!!`);
    //     next();
    // },
    // async (session, args, next) => {
    //     session.sendTyping();

    //     const text = `There are so many unbelievable events happening in New York that I'm such a fan of! I'd love to share some of these invitations with you. Is that ok?`;
    //     builder.Prompts.confirm(session, text);
    // },
    // async (session, args, next) => {
    //     if (!args.response) {
    //      session.send("so sorry to hear that");
    //     }
    //     session.endDialogWithResult({});
    // },
];
