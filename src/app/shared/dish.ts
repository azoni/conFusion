import { Comment } from './comment';

export class Dish {
    name: String;
    image: string;
    category: string;
    label: string;
    price: string;
    description: string;
    comments: Comment[];
}