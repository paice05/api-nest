import { Schema, Document } from 'mongoose';

export const authorSchema = new Schema({
    name: String,
    email: String,
});

export interface Author extends Document {
    name: string;
    email: string;
}