import { IDialogWaterfallStep } from "botbuilder";
import * as builder from "botbuilder";
import { getTaylorAdorableHiCard, getTaylorCryingCard, getTaylorBeingRidiculousCard } from "../../../gifs/taylorCards";
import { User } from "../../../../models/utils/User";


export const invitingNewUserDialog: IDialogWaterfallStep[] = [
    async (session, args, next) => {
        session.sendTyping();

        const message = new builder.Message(session)
            .addAttachment(getTaylorAdorableHiCard());
        session.send(message);

        setTimeout(
            () => next(),
            5000,
        );
    },
    async (session, args, next) => {
        const userAddress = session.message.address;
        const user = await User.schema.statics.getOrCreateFromMSFTBotFrameworkAddress(userAddress);
        console.log("user being invited", JSON.stringify(user));

        session.sendTyping();
        if (user.firstName) {
            session.send(`Hey ${user.firstName}! Have we met? I’m Taylor!!`);
        } else {
            session.send(`Hey! Have we met? I’m Taylor!!`);
        }
        next();
    },
    async (session, args, next) => {
        session.sendTyping();
        session.send("There are so many unbelievable events happening in New York that I'm such a fan of and I'd \U0001F49E to share some of these invitations with you!");

        const text = `Is that ok?`;
        builder.Prompts.confirm(session, text);
    },
    async (session, args, next) => {
        if (!args.response) {
            const message = new builder.Message(session)
                .addAttachment(getTaylorCryingCard());
            session.send(message);

            session.send("so sorry to hear that");
        } else {
            const message = new builder.Message(session)
                .addAttachment(getTaylorBeingRidiculousCard());
            session.send(message);

            session.send("Yayyy!");
            session.send("I'll be in touch :-)");
        }
        session.endDialogWithResult({});
    },
];
