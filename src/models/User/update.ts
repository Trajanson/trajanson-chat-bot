import { User, IUser, UserModel } from "./index";

export interface IUpdateUserFromPhoneNumberRequest extends IUser {
    phoneNumber: string;
}

export const updateUserByPhoneNumberID = async (
    request: IUpdateUserFromPhoneNumberRequest,
) => {
    return await User.findOne(
        { phoneNumber: request.phoneNumber },
        async (err, user: UserModel) => {
            user = Object.assign(user, request);
            await user.save();
        },
    );
};
