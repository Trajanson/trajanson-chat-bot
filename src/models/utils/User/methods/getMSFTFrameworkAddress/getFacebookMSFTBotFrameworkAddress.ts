import { IStartConversationAddress } from "botbuilder";

export const getFacebookMSFTBotFrameworkAddress = async function(): Promise<IStartConversationAddress> {
    return {
        "channelId": "facebook",
        "user": { "id": `${this.facebook.messengerID}`, "name": "Theoderik Trajanson" },
        "conversation": { "isGroup": false, "id": `${this.facebook.messengerID}` },
        "bot": { "id": "724832851055215", "name": "beacon-chat-bot" },
        "serviceUrl": "https://facebook.botframework.com",
    };
};
