import { User, IUser } from "./index";

export interface ICreateUserFromPhoneNumberRequest extends IUser {
    phoneNumber: string;
}

export const createUserFromPhoneNumber = async (
    request: ICreateUserFromPhoneNumberRequest,
) => {
    const user = new User(request);
    return await user.save();
};