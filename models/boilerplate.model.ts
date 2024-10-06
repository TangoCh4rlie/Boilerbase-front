import type {User} from "~/models/user.model";

export interface Boilerplate {
    id?: number;
    name: string;
    gitUrl: string;
    likes: number;
    uses: number;
    authorId: number | null;
    author: User;
}