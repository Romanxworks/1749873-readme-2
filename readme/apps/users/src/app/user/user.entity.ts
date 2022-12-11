import {UserInterface} from '@readme/shared-types';
import {compare, genSalt, hash} from 'bcrypt';
import {SALT_ROUNDS} from './user.constant';

export class UserEntity implements UserInterface {
    public _id: string;
    public date: Date;
    public email: string;
    public name: string;
    public avatar: string;
    public passwordHash: string;
    public subscriptions: string[];
    public likes: string[];
    public posts: string[];

    constructor(user: UserInterface) {
        this.fillEntity(user);
     }
    

    public toObject() {
        return {...this};
    }

    public async setPassword(password: string): Promise<UserEntity> {
        const salt = await genSalt(SALT_ROUNDS);
        this.passwordHash = await hash(password, salt);
        return this;
    }

    public async comparePassword(password: string): Promise<boolean> {
        return compare(password, this.passwordHash);
    }

    public fillEntity(user: UserInterface) {
        this._id = user._id;
        this.date = user.date;
        this.email = user.email;
        this.name = user.name;
        this.avatar = user.avatar;
        this.likes = user.likes;
        this.posts = user.posts;
        this.subscriptions = user.subscriptions;
        this.passwordHash = user.passwordHash;

    }


}