import { IStartConversationAddress, IAddress } from "botbuilder";
import { IUserModel, User } from "../../../User";
import { IUser } from "../..";

export const getOrCreateFromPhoneNumber = async function (
    address: IAddress,
): Promise<IUserModel> {
    const phoneNumber = address.user.id.slice(2);

    let user: IUserModel;
    user = await User.findOne({ phoneNumber });
    if (!user) {
        user = (User as any).createFromPhoneNumber({ phoneNumber });
        await user.save();
    }
    return user;
};