import * as mongoose from "mongoose";
import { validateMobilePhoneNumber } from "../utils/validators/validateMobilePhoneNumber";

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

userSchema.methods.getTextMessageAddress = () => ({
    "id": `+1${this.phoneNumber}`,
    "channelId": "sms",
    "user": { "id": `+1${this.phoneNumber}`, "name": `+1${this.phoneNumber}` },
    "conversation": { "isGroup": false, "id": `+1${this.phoneNumber}` },
    "bot": { "id": `+${process.env.TWILIO_PHONE_NUMBER}`, "name": "beacon-chat-bot" },
    "serviceUrl": "https://sms.botframework.com",
});

userSchema.methods.getFacebookAddress = () => ({
    "channelId": "facebook",
    "user": { "id": `${this.facebook.messengerID}`, "name": "Theoderik Trajanson" },
    "conversation": { "isGroup": false, "id": `${this.facebook.messengerID}` },
    "bot": { "id": "724832851055215", "name": "beacon-chat-bot" },
    "serviceUrl": "https://facebook.botframework.com",
});

export const User = mongoose.model("User", userSchema);
