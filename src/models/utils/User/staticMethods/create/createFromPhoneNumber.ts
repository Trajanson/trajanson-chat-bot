import { IStartConversationAddress } from "botbuilder";
import { IUserModel, User } from "../../../User";
import { IUser } from "../..";

export interface ICreateUserFromPhoneNumberRequest extends IUser {
    phoneNumber: string;
}

export const createFromPhoneNumber = async function (
    request: ICreateUserFromPhoneNumberRequest,
): Promise<IUserModel> {
    const user = new User(request);
    await user.save();
    return user;
};