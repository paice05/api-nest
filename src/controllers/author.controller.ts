import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AuthorService } from '../services/author.service';

@Controller('/author')
export class AuthorController {
    // eslint-disable-next-line no-useless-constructor
    constructor(private readonly authorService: AuthorService) { }

    @Post()
    async createAuthor(@Body() data) {
        const response = await this.authorService.insertAuthor(
            data
        );

        return response;
    }

    @Get()
    async listAuthors() {
        const response = await this.authorService.listAuthor();

        return response;
    }

    @Get(':id')
    async listSingleAuthor(@Param('id') id: string) {
        const response = await this.authorService.listSingleAuthor(id);

        return response;
    }

    @Put(':id')
    async updateAuthor(@Param('id') id: string, @Body() data) {
        const response = await this.authorService.updateAuthor(id, data);

        return response;
    }

    @Delete(':id')
    async removeSigleAuthor(@Param('id') id: string) {
        const response = await this.authorService.removeAuthor(id);

        return response
    }
}
