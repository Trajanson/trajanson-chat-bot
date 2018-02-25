import { IEvent, IMessage } from "botbuilder";
import { User } from "../../models/utils/User";

export const botMiddleware = {
    receive: async (event: IEvent, next: Function) => {
        const userAddress = event.address;
        const user = await User.schema.statics.getOrCreateFromMSFTBotFrameworkAddress(userAddress);

        const eventAsIMessage = event as IMessage;
        if (eventAsIMessage.text) {
            await user.pushMessage(`received: "${eventAsIMessage.text}"`);
        }
        next();
    },

    send: async (event: IEvent, next: Function) => {
        const userAddress = event.address;
        const user = await User.schema.statics.getOrCreateFromMSFTBotFrameworkAddress(userAddress);

        const eventAsIMessage = event as IMessage;
        if (eventAsIMessage.text) {
            await user.pushMessage(`sent: "${eventAsIMessage.text}"`);
        }
        next();
    }
};