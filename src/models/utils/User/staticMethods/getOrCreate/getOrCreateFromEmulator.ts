import { IStartConversationAddress, IAddress } from "botbuilder";
import { IUserModel, User } from "../../../User";
import { IUser } from "../..";

export const getOrCreateFromEmulator = async function (
    address: IAddress,
): Promise<IUserModel> {
    const emulatorID = address.user.id;

    let user: IUserModel;
    user = await User.findOne({ "emulator": emulatorID });
    // if (!user) {
    //     user = (User as any).createFromFacebook({ facebook: { messengerID } });
    //     await user.save();
    // }
    return user;
};
