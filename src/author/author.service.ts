import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Author } from "./author.model";

export class AuthorService {

    constructor(@InjectModel('Author') private readonly authorModel: Model<Author>){}
    
    async insertAuthor(name: string, email: string){
        const response = await this.authorModel.create({
            name,
            email,
        });
        return {
            name: response.name,
            email: response.email
        }
    }

    async getAuthor(){
        const response = await this.authorModel.find();

        return response
    }

}