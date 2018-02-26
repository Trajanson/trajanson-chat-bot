import { IDialogWaterfallStep } from "botbuilder";
import * as builder from "botbuilder";
import { getTaylorAdorableHiCard } from "./../../../chatbot/gifs/taylorCards";
import { inviteUser } from "../../../chatbot/proactiveActions/dialogues/inviteUser";
import { User, IUserModel } from "../../../models/utils/User";
import { ICreateUserFromPhoneNumberRequest } from "../../../models/utils/User/staticMethods/create/createFromPhoneNumber";

export const requestToInviteUserDialog: IDialogWaterfallStep[] = [
    async (session, args, next) => {
        builder.Prompts.text(session, "What is the phone number of the person you want to add?");
    },
    async (session, args, next) => {
        session.dialogData.phoneNumber = args.response;
        builder.Prompts.text(session, "What is their first name?");
    },
    async (session, args, next) => {
        session.dialogData.firstName = args.response;

        const phoneNumber = session.dialogData.phoneNumber;
        const firstName = session.dialogData.firstName;

        const userData: ICreateUserFromPhoneNumberRequest = {
            phoneNumber,
            firstName,
        };
        const user: IUserModel = await User.schema.statics.createFromPhoneNumber(userData);
        const userPhoneAddress = await user.getTextMessageMSFTBotFrameworkAddress();

        setTimeout(
            () => inviteUser(userPhoneAddress),
            100,
        );
    },
];
