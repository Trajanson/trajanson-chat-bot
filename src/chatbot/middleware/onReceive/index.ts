import { IEvent, IMessage, Session } from "botbuilder";
import { User } from "../../../models/utils/User";

export const onReceive = [async (session: Session, next: Function) => {
    const userAddress = session.message.address;
    const user = await User.schema.statics.getOrCreateFromMSFTBotFrameworkAddress(userAddress);

    console.log("user", user);
    // const messageText = session.message.text;
    // if (messageText) {
    //     await user.pushMessage(`received: "${messageText}"`);
    // }

    next();
}];