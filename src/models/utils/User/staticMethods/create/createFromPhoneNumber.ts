import { IStartConversationAddress } from "botbuilder";
import { IUserModel, User, IUserBaseProps } from "../../../User";
import { IUser } from "../..";

export interface ICreateUserFromPhoneNumberRequest extends IUserBaseProps {
    phoneNumber: string;
}

export const createFromPhoneNumber = async function (
    request: ICreateUserFromPhoneNumberRequest,
): Promise<IUserModel> {
    const user = new User(request);
    console.log("request", JSON.stringify(request, undefined, 4));
    await user.save();
    return user;
};