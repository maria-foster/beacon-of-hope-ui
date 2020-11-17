import { User } from './user';

export interface Comment {
    user: User,
    content: string, 
    likes: number,
    dislikes: number,
    comments: Array<Comment>,
    flagged: Boolean
}