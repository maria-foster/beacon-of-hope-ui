import { User } from './user';

export interface Thread { 
    _id: string,
    content: string,
    title: string,
    likes: number,
    dislikes: number,
    user: User,
    comments: Array<Comment>,
    flagged: boolean,
    category: string
}