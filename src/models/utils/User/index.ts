import * as mongoose from "mongoose";
import { IStartConversationAddress } from "botbuilder";
import { validateMobilePhoneNumber } from "./../../../models/utils/validators/validateMobilePhoneNumber";
import { createFromPhoneNumber } from "../../../models/utils/User/staticMethods/create/createFromPhoneNumber";
import { createFromFacebook } from "../../../models/utils/User/staticMethods/create/createFromFacebook";
import { getOrCreateFromPhoneNumber } from "../../../models/utils/User/staticMethods/getOrCreate/getOrCreateFromPhoneNumber";
import { getOrCreateFromFacebook } from "../../../models/utils/User/staticMethods/getOrCreate/getOrCreateFromFacebook";

export interface IFacebookConnection {
    messengerID: string;
}

export interface IUser {
    email?: string;
    phoneNumber?: string;

    firstName?: string;
    middleName?: string;
    lastName?: string;
    gender?: string;

    facebook?: IFacebookConnection;

    getTextMessageMSFTBotFrameworkAddress: () => IStartConversationAddress;

    getFacebookMSFTBotFrameworkAddress: () => IStartConversationAddress;
}

export type IUserModel = mongoose.Document & IUser;

export const userSchema = new mongoose.Schema({
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
    }
    }, {
        strict: true,
        timestamps: true,
});

userSchema.statics.createFromPhoneNumber = createFromPhoneNumber;
userSchema.statics.createFromFacebook = createFromFacebook;

userSchema.statics.getOrCreateFromPhoneNumber = getOrCreateFromPhoneNumber;
userSchema.statics.getOrCreateFromFacebook = getOrCreateFromFacebook;


export const User = mongoose.model<IUserModel>("User", userSchema);