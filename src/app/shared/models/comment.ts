import { User } from './user';

export interface Comment {
    user: string,
    content: string, 
    likes: number,
    dislikes: number,
    flagged: Boolean
}