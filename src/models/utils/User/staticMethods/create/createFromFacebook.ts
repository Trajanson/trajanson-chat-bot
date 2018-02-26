import { IStartConversationAddress } from "botbuilder";
import { IUserModel, User, IUserBaseProps } from "../../../User";
import { IUser, IFacebookConnection } from "../..";

export interface ICreateUserFromFacebookRequest extends IUserBaseProps {
    facebook: IFacebookConnection;
}

export const createFromFacebook = async function (
    request: ICreateUserFromFacebookRequest,
): Promise<IUserModel> {
    const user = new User(request);
    await user.save();
    return user;
};