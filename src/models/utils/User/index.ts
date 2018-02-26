import * as mongoose from "mongoose";
import { IStartConversationAddress } from "botbuilder";
import { validateMobilePhoneNumber } from "./../../../models/utils/validators/validateMobilePhoneNumber";
import { createFromPhoneNumber } from "../../../models/utils/User/staticMethods/create/createFromPhoneNumber";
import { createFromFacebook } from "../../../models/utils/User/staticMethods/create/createFromFacebook";
import { getOrCreateFromPhoneNumber } from "../../../models/utils/User/staticMethods/getOrCreate/getOrCreateFromPhoneNumber";
import { getOrCreateFromFacebook } from "../../../models/utils/User/staticMethods/getOrCreate/getOrCreateFromFacebook";
import { getTextMessageMSFTBotFrameworkAddress } from "../../../models/utils/User/methods/getMSFTFrameworkAddress/getTextMessageMSFTBotFrameworkAddress";
import { getFacebookMSFTBotFrameworkAddress } from "../../../models/utils/User/methods/getMSFTFrameworkAddress/getFacebookMSFTBotFrameworkAddress";
import { getOrCreateFromMSFTBotFrameworkAddress } from "../../../models/utils/User/staticMethods/getOrCreate/getOrCreateFromMSFTBotFrameworkAddress";
import { pushMessage } from "../../../models/utils/User/methods/pushMessage";
import { getOrCreateFromEmulator } from "./staticMethods/getOrCreate/getOrCreateFromEmulator";

export interface IFacebookConnection {
    messengerID: string;
}

export interface IUserRoles {
    isSuperUser: boolean;
}

export interface IUserBaseProps {
    roles?: IUserRoles;
    email?: string;
    phoneNumber?: string;

    firstName?: string;
    middleName?: string;
    lastName?: string;
    gender?: string;

    facebook?: IFacebookConnection;

    messages?: string[];

    emulator?: string;
}

export interface IUser extends IUserBaseProps {
    getTextMessageMSFTBotFrameworkAddress: () => IStartConversationAddress;

    getFacebookMSFTBotFrameworkAddress: () => IStartConversationAddress;

    pushMessage: (message: string) => void;
}

export type IUserModel = mongoose.Document & IUser;

export const userSchema = new mongoose.Schema(
    {
        roles: {
            isSuperUser: { type: Boolean, default: false }
        },
        email: {
            type: String,
            unique: true,
        },
        phoneNumber: {
            type: String,
            unique: true,
            trim: true,
            validate: [validateMobilePhoneNumber, "Not a mobile phone number"],
        },

        firstName: { type: String },
        middleName: { type: String },
        lastName: { type: String },
        gender: { type: String },

        facebook: {
            messengerID: String,
        },

        messages: { type: [String], default: [] },
        emulator: {
            type: String,
            unique: true,
        },
    },
    {
        strict: true,
        timestamps: true,
    }
);

userSchema.methods.pushMessage = pushMessage;

userSchema.methods.getTextMessageMSFTBotFrameworkAddress = getTextMessageMSFTBotFrameworkAddress;
userSchema.methods.getFacebookMSFTBotFrameworkAddress = getFacebookMSFTBotFrameworkAddress;


userSchema.statics.getOrCreateFromMSFTBotFrameworkAddress = getOrCreateFromMSFTBotFrameworkAddress;

userSchema.statics.createFromPhoneNumber = createFromPhoneNumber;
userSchema.statics.createFromFacebook = createFromFacebook;
userSchema.statics.getOrCreateFromEmulator = getOrCreateFromEmulator;

userSchema.statics.getOrCreateFromPhoneNumber = getOrCreateFromPhoneNumber;
userSchema.statics.getOrCreateFromFacebook = getOrCreateFromFacebook;


export const User = mongoose.model<IUserModel>("User", userSchema);