import { IDialogWaterfallStep } from "botbuilder";
import * as builder from "botbuilder";
import { getTaylorAdorableHiCard } from "./../../../chatbot/gifs/taylorCards";
import { inviteUser } from "../../../chatbot/proactiveActions/dialogues/inviteUser";
import { User, IUserModel } from "../../../models/utils/User";

export const requestToInviteUserDialog: IDialogWaterfallStep[] = [
    async (session, args, next) => {
        builder.Prompts.text(session, "What is the phone number of the person you want to add?");
    },
    async (session, args, next) => {
        const phoneNumber = args.response;

        const user: IUserModel = await User.schema.statics.getOrCreateFromPhoneNumber(phoneNumber);
        const userPhoneAddress = await user.getTextMessageMSFTBotFrameworkAddress();

        setTimeout(
            () => inviteUser(userPhoneAddress),
            100,
        );
    },
];
