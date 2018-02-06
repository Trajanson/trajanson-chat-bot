import { Session } from "botbuilder";

interface IUserRecord {
    hasMetBot: boolean;
    name: string;

}
interface IImportedUserRecord {
    hasMetBot?: boolean;
    name?: string;
}

export class UserRecord {
    record: IUserRecord;
    static defaultUserRecord: IUserRecord = {
        hasMetBot: false,
        name: undefined,
    };

    static getFromSession(session: Session) {
        const importedUserRecord = session.userData.userRecord;
        return new UserRecord(Object.assign(this.defaultUserRecord, importedUserRecord));
    }

    constructor(userRecord: IUserRecord) {
        this.record = userRecord;
    }

    storeInMemory = (session: Session) => {
        session.userData.userRecord = this.record;
    }
    storeInSession = (session: Session) => {
        this.storeInMemory(session);
        session.save();
    };

    hasMetBot() { return this.record.hasMetBot; }
    meetBot(session: Session) {
        this.record.hasMetBot = true;
        this.storeInSession(session);
    }
}