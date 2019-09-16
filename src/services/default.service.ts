import { InternalServerErrorException } from '@nestjs/common';
import { Model, Document } from "mongoose";

import { User } from "../models";

type ModelType = Document | User;

export class DefaultService {
    public model: Model<ModelType>;

    constructor(model: Model<ModelType>) {
        this.model = model;
    }

    async create(data): Promise<ModelType> {
        try {
            const response = await this.model.create({
                ...data
            });
            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

    async list(): Promise<ModelType[]> {
        try {
            const response = await this.model.find();

            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

    async listSingle(id): Promise<ModelType> {
        try {
            const response = await this.model.findOne({ _id: id });

            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

    async update(id, data) {
        try {
            const isRecord = await this.model.findOne({ _id: id });

            // eslint-disable-next-line no-underscore-dangle
            const response = await this.model.updateOne({ _id: isRecord._id }, {
                $set: {
                    ...data
                }
            });

            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

    async remove(id) {
        try {
            const isRecord = await this.model.findOne({ _id: id });

            // eslint-disable-next-line no-underscore-dangle
            const response = await this.model.deleteOne({ _id: isRecord._id });

            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

}