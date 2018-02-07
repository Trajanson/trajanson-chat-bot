import * as builder from "botbuilder";

export class BotSingleton {
    private static bot: builder.UniversalBot;

    public static setBot(
        bot: builder.UniversalBot,
    ) {
        this.bot = bot;
    }

    public static getBot() {
        return this.bot;
    }
}