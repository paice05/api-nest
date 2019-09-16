import { Schema, Document } from 'mongoose';

export const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
});

export interface Author extends Document {
    name: string;
    email: string;
}