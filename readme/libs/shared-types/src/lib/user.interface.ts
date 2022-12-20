export interface UserInterface {
    _id?: string;
    date: Date;
    email: string;
    name: string;
    avatar: string;
    passwordHash: string;
    subscriptions: string[];
    likes: string[];
    posts: string[];
}
