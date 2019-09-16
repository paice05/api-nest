import { InjectModel } from "@nestjs/mongoose";
import { InternalServerErrorException } from '@nestjs/common';
import { Model } from "mongoose";

import { Author } from "../models/author.model";

export class AuthorService {

    // eslint-disable-next-line no-useless-constructor
    constructor(@InjectModel('Author') private readonly authorModel: Model<Author>) { }

    /**
     * Insert new author
     * @param data 
     */
    async insertAuthor(data): Promise<Author> {
        try {
            const response = await this.authorModel.create({
                ...data
            });
            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

    /**
     * List all author
     */
    async listAuthor(): Promise<Author[]> {
        try {
            const response = await this.authorModel.find();

            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

    /**
     * List sigle author
     * @param id 
     */
    async listSingleAuthor(id): Promise<Author> {
        try {
            const response = await this.authorModel.findOne({ _id: id });

            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

    /**
     * Update single author
     * @param id 
     * @param data 
     */
    async updateAuthor(id, data) {
        try {
            const isAuthor = await this.authorModel.findOne({ _id: id });

            // eslint-disable-next-line no-underscore-dangle
            const response = await this.authorModel.updateOne({ _id: isAuthor._id }, {
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
     * Remove sigle author
     * @param id 
     */
    async removeAuthor(id) {
        try {
            const isAuthor = await this.authorModel.findOne({ _id: id });

            // eslint-disable-next-line no-underscore-dangle
            const response = await this.authorModel.deleteOne({ _id: isAuthor._id });

            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

}