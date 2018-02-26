import { IEvent, IMessage } from "botbuilder";
import { User } from "../../../models/utils/User";

export const onSend = async (event: IEvent, next: Function) => {

    const userAddress = event.address;
    const user = await User.schema.statics.getOrCreateFromMSFTBotFrameworkAddress(userAddress);

    const eventAsIMessage = event as IMessage;
    if (eventAsIMessage.text) {
        await user.pushMessage(`sent: "${eventAsIMessage.text}"`);
    }
    next();
};