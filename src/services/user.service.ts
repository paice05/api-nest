import { InjectModel } from '@nestjs/mongoose'
import { InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';

import { DefaultService } from './default.service';
import { User } from '../models';

export class UserService extends DefaultService {

    constructor(@InjectModel('User') public readonly userModel: Model<User>) {
        super(userModel);
    }

    async login(email, password) {
        const isEmail = await this.userModel.findOne({ email });

        if (!isEmail) throw new InternalServerErrorException('Email not found');

        const isPassword = await this.userModel.findOne({ email, password });

        if (!isPassword) throw new InternalServerErrorException('Password not found');

        return {
            user: isPassword,
            message: 'OK'
        }

    }
}