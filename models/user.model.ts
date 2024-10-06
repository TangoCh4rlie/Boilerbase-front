import type {Boilerplate} from "~/models/boilerplate.model";

export interface User {
    id?: number;
    username: string;
    email: string;
    password?: string;
    boilerplates?: Boilerplate[];
}