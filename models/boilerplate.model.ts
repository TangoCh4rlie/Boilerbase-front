import type {User} from "~/models/user.model";
import type {Like} from "~/models/like.model";

export interface Boilerplate {
    id?: number;
    name: string;
    gitUrl: string;
    likesCounter: number;
    usesCounter: number;
    authorId: number | null;
    author?: User;
    likes?: Like[];
}