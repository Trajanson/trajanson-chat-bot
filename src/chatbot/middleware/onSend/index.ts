import { IEvent, IMessage } from "botbuilder";
import { User } from "../../../models/utils/User";

export const onSend = async (event: IEvent, next: Function) => {
    // console.log("THIS WAS HIT from onSend");

    // const userAddress = event.address;
    // console.log("userAddress from onSend", JSON.stringify(userAddress, undefined, 4));
    // const user = await User.schema.statics.getOrCreateFromMSFTBotFrameworkAddress(userAddress);
    // console.log("user from onSend", JSON.stringify(user, undefined, 4));

    // const eventAsIMessage = event as IMessage;
    // if (eventAsIMessage.text) {
    //     await user.pushMessage(`sent: "${eventAsIMessage.text}"`);
    // }
    next();
};