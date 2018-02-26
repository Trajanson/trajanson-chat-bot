import * as mongoose from "mongoose";

export interface IUserPlanningToAttendHostedEvent {
    userID: string;
    notes: string;
}

export const userPlanningToAttendHostedEventSchema = new mongoose.Schema(
    {
        userID: { type: String },
        notes: { type: String },
    },
    {
        strict: true,
        timestamps: true,
    },
);


export interface IUserPlanningNotToComeToHostedEvent {
    userID: string;
    reasonForNotComing: string;
}

export const userPlanningNotToComeToHostedEventSchema = new mongoose.Schema(
    {
        userID: { type: String },
        reasonForNotComing: { type: String },
    },
    {
        strict: true,
        timestamps: true,
    },
);

export interface IHostedEventUsers {
    /** Array of UserIds */
    invited: string[];

    planning_to_attend: IUserPlanningToAttendHostedEvent[];

    planning_not_to_come: IUserPlanningNotToComeToHostedEvent[];

    attended: string[];
}

export const hostedEventUsersSchema = new mongoose.Schema(
    {
        invited: { type: [String] },
        planning_to_attend: { type: [userPlanningToAttendHostedEventSchema] },
        planning_not_to_come: { type: [userPlanningNotToComeToHostedEventSchema] },

        attended: { type: [String] },
    },
    {
        strict: true,
        timestamps: true,
    },
);

export interface IHostedEvent {
    name?: string;
    address?: string;

    description?: string;

    users: IHostedEventUsers;
}

export type IHostedEventModel = mongoose.Document & IHostedEvent;

export const hostedEventSchema = new mongoose.Schema(
    {
        name: { type: String },
        address: { type: String },
        description: { type: String },
        users: { type: [hostedEventUsersSchema] },
    },
    {
        strict: true,
        timestamps: true,
    },
);

export const HostedEvent = mongoose.model<IHostedEventModel>("HostedEvent", hostedEventSchema);