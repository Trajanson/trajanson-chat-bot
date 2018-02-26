import { IStartConversationAddress, IAddress } from "botbuilder";
import { IUserModel, User } from "../../../User";
import { IUser } from "../..";

export const getOrCreateFromFacebook = async function (
    address: IAddress,
): Promise<IUserModel> {
    const messengerID = address.user.id;

    let user: IUserModel;
    user = await User.findOne({ "facebook.messengerID": messengerID });
    if (!user) {
        user = (User as any).createFromFacebook({ facebook: { messengerID } });
        await user.save();
    }
    return user;
};
