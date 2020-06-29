import { Document, Model, model, Schema } from 'mongoose';

/**
 * Interface to model the User Schema for TypeScript.
 * @param email:string
 * @param password:string
 * @param avatar:string
 */
export interface IUser extends Document {
    googleId: string;
}

const userSchema: Schema = new Schema({
    googleId: {
        type: String,
        required: true,
        unique: true,
    },
});

const User: Model<IUser> = model('User', userSchema);

export default User;
