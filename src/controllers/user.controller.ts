import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';

import { UserService } from '../services/user.service';

@Controller('/user')
export class UserController extends UserService {

    @Post('/login')
    async loginUser(@Body('email') email, @Body('password') password) {
        const response = await this.login(email, password);

        return response;
    }

    @Post()
    async createUser(@Body() data) {
        const response = await this.create(data);

        return response;
    }

    @Get()
    async listUser() {
        const response = await this.list();

        return response;
    }

    @Get(':id')
    async listSingleUser(@Param('id') id: string) {
        const response = await this.listSingle(id);

        return response;
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() data) {
        const response = await this.update(id, data);

        return response;
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        const response = await this.remove(id);

        return response;
    }

}
