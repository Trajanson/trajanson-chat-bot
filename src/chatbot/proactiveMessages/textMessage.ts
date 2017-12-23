import { Session, Message, UniversalBot } from "botbuilder";

export const sendTextMessageByPhoneNumber = (botOrSession: UniversalBot | Session, phoneNumber: string, message: Message) => {
    const address = {
        "id": `+1${phoneNumber}`,
        "channelId": "sms",
        "user": { "id": `+1${phoneNumber}`, "name": `+1${phoneNumber}` },
        "conversation": { "isGroup": false, "id": `+1${phoneNumber}` },
        "bot": { "id": `+${process.env.TWILIO_PHONE_NUMBER}`, "name": "trajanson-chat-bot" },
        "serviceUrl": "https://sms.botframework.com",
      };


    const session = botOrSession as Session;

    session.send(message.address(address));
};