export interface IUserRecord {
    hasMetBot: boolean;
    name: string;
}

const cloneObject = (obj: any) => JSON.parse(JSON.stringify(obj));

export const defaultUserRecord: IUserRecord = {
    hasMetBot: false,
    name: undefined,
};

export const updateHasMetBot = (userRecord: IUserRecord, updatedHasMetBot: boolean): IUserRecord => {
    const clonedUserRecord = cloneObject(userRecord);
    clonedUserRecord.hasMetBot = updatedHasMetBot;
    return clonedUserRecord;
};