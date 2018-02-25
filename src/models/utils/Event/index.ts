import * as mongoose from "mongoose";

export interface IUserPlanningToAttend {
    userID: string;
    notes: string;
}

export const eventUserPlanningToAttendSchema = new mongoose.Schema(
    {
        userID: { type: String },
        notes: { type: String },
    },
    {
        strict: true,
        timestamps: true,
    },
);


export interface IUserPlanningNotToCome {
    userID: string;
    reasonForNotComing: string;
}

export const eventUserPlanningNotToComeSchema = new mongoose.Schema(
    {
        userID: { type: String },
        reasonForNotComing: { type: String },
    },
    {
        strict: true,
        timestamps: true,
    },
);

export interface IEventUsers {
    /** Array of UserIds */
    invited: string[];

    planning_to_attend: IUserPlanningToAttend[];

    planning_not_to_come: IUserPlanningNotToCome[];

    attended: string[];
}

export const eventUsersSchema = new mongoose.Schema(
    {
        invited: { type: [String] },
        planning_to_attend: { type: [eventUserPlanningToAttendSchema] },
        planning_not_to_come: { type: [eventUserPlanningNotToComeSchema] },

        attended: { type: [String] },
    },
    {
        strict: true,
        timestamps: true,
    },
);

export interface IEvent {
    name?: string;
    address?: string;

    description?: string;

    users: IEventUsers;
}

export type IEventModel = mongoose.Document & IEvent;

export const eventSchema = new mongoose.Schema(
    {
        name: { type: String },
        address: { type: String },
        description: { type: String },
        users: { type: [eventUsersSchema] },
    },
    {
        strict: true,
        timestamps: true,
    },
);

export const Event = mongoose.model<IEventModel>("Event", eventSchema);