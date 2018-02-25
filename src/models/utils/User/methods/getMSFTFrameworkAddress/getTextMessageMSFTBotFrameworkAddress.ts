import { IStartConversationAddress } from "botbuilder";

export const getTextMessageMSFTBotFrameworkAddress = async function (): Promise<IStartConversationAddress> {
    return {
        "id": `+1${this.phoneNumber}`,
        "channelId": "sms",
        "user": { "id": `+1${this.phoneNumber}`, "name": `+1${this.phoneNumber}` },
        "conversation": { "isGroup": false, "id": `+1${this.phoneNumber}` },
        "bot": { "id": `+${process.env.TWILIO_PHONE_NUMBER}`, "name": "beacon-chat-bot" },
        "serviceUrl": "https://sms.botframework.com",
    };
};
