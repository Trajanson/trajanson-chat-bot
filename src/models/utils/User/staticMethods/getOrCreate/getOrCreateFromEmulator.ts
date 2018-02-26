import { IStartConversationAddress, IAddress } from "botbuilder";
import { IUserModel, User } from "../../../User";
import { IUser } from "../..";

export const getOrCreateFromEmulator = async function (
    address: IAddress,
): Promise<IUserModel> {
    let user: IUserModel;
    const emulatorID = address.user.id;

    user = await User.findOne({ "emulator": emulatorID });
    // if (!user) {
    //     user = (User as any).createFromFacebook({ facebook: { messengerID } });
    //     await user.save();
    // }
    return user;
};
