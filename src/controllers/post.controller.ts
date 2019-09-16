import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PostService } from '../services/post.service';

@Controller('/post')
export class PostController {
    // eslint-disable-next-line no-useless-constructor
    constructor(private readonly postService: PostService) { }

    @Post()
    async createPost(@Body() data) {
        const response = await this.postService.insertPost(
            data
        );

        return response;
    }

    @Get()
    async listPosts() {
        const response = await this.postService.listPost();

        return response;
    }

    @Get(':id')
    async listSinglePost(@Param('id') id: string) {
        const response = await this.postService.listSinglePost(id);

        return response;
    }

    @Put(':id')
    async updatePost(@Param('id') id: string, @Body() data) {
        const response = await this.postService.updatePost(id, data);

        return response;
    }

    @Post(':id/addComment')
    async addComment(@Param('id') id: string, @Body() data) {
        const response = await this.postService.addComment(id, data);

        return response;
    }

    @Delete(':id/:idComment')
    async removeComment(@Param('id') id: string, @Param('idComment') idComment: string) {
        const response = await this.postService.removeComments(id, idComment);

        return response;
    }

    @Delete(':id')
    async removeSiglePost(@Param('id') id: string) {
        const response = await this.postService.removePost(id);

        return response
    }
}
