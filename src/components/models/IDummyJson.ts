import {IUser} from "./IUser";

export interface IDummyJson {
    users: IUser[],
    total: number,
    skip: number,
    limit: number;
}
