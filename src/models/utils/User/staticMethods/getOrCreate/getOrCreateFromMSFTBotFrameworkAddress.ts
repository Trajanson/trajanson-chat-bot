import { IAddress } from "botbuilder";
import { User, IUserModel } from "../../../../../models/utils/User";

export const getOrCreateFromMSFTBotFrameworkAddress = async (
    address: IAddress,
): Promise<IUserModel> => {
    switch (address.channelId) {
        case "facebook":
            return await User.schema.statics.getOrCreateFromFacebook(address);
        case "sms":
            return await User.schema.statics.getOrCreateFromPhoneNumber(address);
        case "emulator":
            return await User.schema.statics.getOrCreateFromEmulator(address);
        default:
            break;
    }
};