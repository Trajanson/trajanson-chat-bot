import { IEvent, IMessage } from "botbuilder";
import { User } from "../../models/utils/User";
import { onReceive } from "./onReceive";
import { onSend } from "./onSend";

export const botMiddleware = {
    botbuilder: onReceive,
    send: onSend,
};