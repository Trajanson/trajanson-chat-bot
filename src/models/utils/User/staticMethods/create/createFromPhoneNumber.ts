import { IStartConversationAddress } from "botbuilder";
import { IUserModel, User, IUserBaseProps } from "../../../User";
import { IUser } from "../..";

export interface ICreateUserFromPhoneNumberRequest extends IUserBaseProps {
    phoneNumber: string;
}

export const createFromPhoneNumber = async function (
    request: ICreateUserFromPhoneNumberRequest,
): Promise<IUserModel> {
    let user: IUserModel;
    const phoneNumber = request.phoneNumber;

    user = await User.findOne({ phoneNumber });
    if (!user) {
        user = new User(request);
        await user.save();
    }
    return user;
};
