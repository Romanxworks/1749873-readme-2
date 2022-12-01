export interface UserInterface {
    _id: string;
    email: string;
    name: string;
    avatar: string;
    passwordHash: string;
    subscription: string[];
    likes: string[];
    posts: string[];
}
