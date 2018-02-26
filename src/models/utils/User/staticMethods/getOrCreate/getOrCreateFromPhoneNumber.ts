import { IStartConversationAddress } from "botbuilder";
import { IUserModel, User } from "../../../User";
import { IUser } from "../..";

export const getOrCreateFromPhoneNumber = async function (
    phoneNumber: string,
): Promise<IUserModel> {
    let user: IUserModel;

    user = await User.findOne({ phoneNumber });
    if (!user) {
        user = (User as any).createFromPhoneNumber({ phoneNumber });
        console.log("user from inside getOrCreateFromPhoneNumber", JSON.stringify(user, undefined, 4));
        await user.save();
    }
    return user;
};