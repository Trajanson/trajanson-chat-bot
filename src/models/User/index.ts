import * as mongoose from "mongoose";
import { validateMobilePhoneNumber } from "../utils/validators/validateMobilePhoneNumber";

export interface IFacebookConnection {
}

export interface IUser {
    email?: string;
    phoneNumber?: string;

    firstName?: string;
    middleName?: string;
    lastName?: string;
    gender?: string;

    doSomething?: () => string;
}

export type UserModel = mongoose.Document & IUser;

const userSchema = new mongoose.Schema({
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
}, {
        strict: true,
        timestamps: true,
    });

userSchema.methods.doSomething = () => "do it!";

export const User = mongoose.model("User", userSchema);
