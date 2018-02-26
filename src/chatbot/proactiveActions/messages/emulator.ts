import { Session, Message, UniversalBot } from "botbuilder";

export const sendEmulatorMessageByUserID = async (botOrSession: UniversalBot | Session, userID: string, message: Message) => {
    const address = {
        id: "8i3d2d2m6h9l",
        channelId: "emulator",
        user: { id: userID || "default-user", name: "User" },
        conversation: { id: "ci18m8ehf49b" },
        bot: { id: "aij9n032bfd2", name: "Bot" },
        serviceUrl: "http://localhost:62345",
    };

    const session = botOrSession as Session;

    await session.send(message.address(address));
};