import { Schema, Document } from 'mongoose';

export interface Author extends Document {
    name: string;
    email: string;
}

export const authorSchema = new Schema<Author>({
    name: {
        type: String,
        required: true
    },
    email: String,
}, { timestamps: true } );

