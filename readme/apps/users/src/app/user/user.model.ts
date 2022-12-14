import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserInterface } from '@readme/shared-types';

@Schema({
    collection: 'users',
  })
export class UserModel extends Document implements UserInterface{
    @Prop()
    public date: Date;

    @Prop({
        required: true,
        unique: true,
    })
    public email: string;

    @Prop({
        required: true
    })
    public name: string;

    @Prop()
    public avatar: string;

    @Prop({
        required: true
    })
    public passwordHash: string;

    @Prop({
        default: []
    })
    public subscriptions: string[];

    @Prop({
        default: []
    })
    public likes: string[];

    @Prop({
        default: []
    })
    public posts: string[];
    
}

export const UserSchema = SchemaFactory.createForClass(UserModel);