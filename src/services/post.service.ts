import { InjectModel } from "@nestjs/mongoose";
import { InternalServerErrorException } from '@nestjs/common';
import { Model } from "mongoose";

import { Post } from "../models/post.mdoel";

export class PostService {

    // eslint-disable-next-line no-useless-constructor
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }

    /**
     * Insert new post
     * @param data 
     */
    async insertPost(data): Promise<Post> {
        try {
            const response = await this.postModel.create({
                ...data
            });
            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

    /**
     * List all post
     */
    async listPost(): Promise<Post[]> {
        try {
            const response = await this.postModel.find()
                .populate(['author', 'comments.author']);

            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

    /**
     * List sigle post
     * @param id 
     */
    async listSinglePost(id): Promise<Post> {
        try {
            const response = await this.postModel.findOne({ _id: id })
                .populate(['author', 'comments.author']);

            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

    /**
     * Update single post
     * @param id 
     * @param data 
     */
    async updatePost(id, data) {
        try {
            const isPost = await this.postModel.findOne({ _id: id });

            // eslint-disable-next-line no-underscore-dangle
            const response = await this.postModel.updateOne({ _id: isPost._id }, {
                $set: {
                    ...data
                }
            });

            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

    /**
     * Remove sigle post
     * @param id 
     */
    async removePost(id) {
        try {
            const isPost = await this.postModel.findOne({ _id: id });

            // eslint-disable-next-line no-underscore-dangle
            const response = await this.postModel.deleteOne({ _id: isPost._id });

            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

    /**
     * Add comment post
     * @param idPost 
     * @param data 
     */
    async addComment(id, data) {
        try {
            const isPost = await this.postModel.findOne({ _id: id });

            await isPost.comments.push(data)

            const response = await isPost.save();

            return response;

        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

    /**
     * Remove comment post
     * @param idPost
     * @param idComment 
     */
    async removeComments(id, idComment) {
        try {
            const isPost = await this.postModel.findOne({ _id: id });

            for (let i = 0; i < isPost.comments.length; i += 1) {
                // eslint-disable-next-line no-underscore-dangle
                if (isPost.comments[i]._id.toString() === idComment.toString()) isPost.comments.splice(i, 1)
            }

            const response = await isPost.save();

            return response;

        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

}