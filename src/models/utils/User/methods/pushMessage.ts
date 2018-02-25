import { User } from "../../../../models/utils/User";

export const pushMessage = async function(newMessage: string) {
    await User.update(
        { _id: this._id },
        { $push: { messages: newMessage } },
    );
};
