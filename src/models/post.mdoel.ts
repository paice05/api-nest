import { Schema, Document, Types } from 'mongoose';

import { Author } from './author.model';

interface Commnents {
    _id: string;
    author: Author;
    text: string;
}

export interface Post extends Document {
    author: Author;
    title: string;
    body: string;
    comments: Commnents[];
}

const commentsSchema = new Schema({
    author: {
        type: Types.ObjectId,
        ref: 'Author'
    },
    text: String,
}, { timestamps: true })

export const postSchema = new Schema<Post>({
    author: {
        type: Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    title: String,
    body: String,
    comments: [commentsSchema]
}, { timestamps: true })