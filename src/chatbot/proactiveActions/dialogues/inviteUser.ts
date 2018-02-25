import { UniversalBot, IAddress } from "botbuilder";
import { BotSingleton } from "../../../chatbot/BotSingleton";

export const inviteUser = async (address: IAddress) => {
    const bot: UniversalBot = BotSingleton.getBot();
    await bot.beginDialog(address, "*:/inviteUser");
};