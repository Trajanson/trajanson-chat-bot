import { UniversalBot, IAddress } from "botbuilder";
import { BotSingleton } from "../../../chatbot/BotSingleton";
import { proactiveInvitingNewUserRoute } from "../../dialogues";

export const inviteUser = async (address: IAddress) => {
    const bot: UniversalBot = BotSingleton.getBot();
    await bot.beginDialog(address, proactiveInvitingNewUserRoute);
};