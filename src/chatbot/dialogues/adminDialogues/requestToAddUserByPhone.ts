import { IDialogWaterfallStep } from "botbuilder";
import * as builder from "botbuilder";
import { getTaylorAdorableHiCard } from "./../../../chatbot/gifs/taylorCards";
import { inviteUser } from "../../../chatbot/proactiveActions/dialogues/inviteUser";
import { User, IUserModel } from "../../../models/utils/User";

export const requestToAddUserByPhoneDialog: IDialogWaterfallStep[] = [
    async (session, args, next) => {
        const phoneNumber = "7249773225";
        const message = new builder.Message(session)
            .addAttachment(getTaylorAdorableHiCard());

        const user: IUserModel = await User.schema.statics.getOrCreateFromPhoneNumber(phoneNumber);
        const userPhoneAddress = await user.getTextMessageMSFTBotFrameworkAddress();

        setTimeout(inviteUser(userPhoneAddress), 100);
    },
];
