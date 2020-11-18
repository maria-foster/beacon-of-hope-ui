import { User } from './user';
import { Comment } from './comment'
export interface Thread { 
    _id: string,
    content: string,
    title: string,
    likes: number,
    dislikes: number,
    user: string,
    comments: Array<Comment>,
    flagged: boolean,
    category: string
}