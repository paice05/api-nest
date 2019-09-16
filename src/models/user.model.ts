import { Schema, Document } from 'mongoose';

export interface User extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
}

export const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: String,
    email: String,
    password: String,
    phone: String,
});