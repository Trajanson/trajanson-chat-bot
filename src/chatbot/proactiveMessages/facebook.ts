import { Session, Message, UniversalBot } from "botbuilder";

export const sendFacebookMessageByUserID = (botOrSession: UniversalBot | Session, userID: string, message: Message) => {
    const address = {
    "channelId": "facebook",
    "user": { "id": `${userID}`, "name": "Theoderik Trajanson" },
    "conversation": {"isGroup": false, "id": `${userID}`},
    "bot": { "id": "724832851055215", "name": "trajanson-chat-bot" },
    "serviceUrl": "https://facebook.botframework.com",
    };

    const session = botOrSession as Session;

    session.send(message.address(address));
};