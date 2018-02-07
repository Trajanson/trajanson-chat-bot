import { IDialogWaterfallStep } from "botbuilder";
import { sendTextMessageByPhoneNumber } from "./../../proactiveMessages/textMessage";
import * as builder from "botbuilder";
import { getTaylorAdorableHiCard } from "./../../../chatbot/gifs/taylorCards";

export const requestToAddUserByPhoneDialog: IDialogWaterfallStep[] = [
    (session, args, next) => {

        // bot.beginDialog(address, "*:/survey");
        const phoneNumber = "7249773225";
        const message = new builder.Message(session)
            .addAttachment(getTaylorAdorableHiCard());

        sendTextMessageByPhoneNumber(session, phoneNumber, message);
    },
];
