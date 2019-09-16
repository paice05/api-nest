import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthorService } from './author.service';

@Controller('/author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async createAuthor(
    @Body('name') name: string,
    @Body('email') email: string,
  ){
      
      const response = await this.authorService.insertAuthor(
          name,
          email
      );

      return response;
  }

  @Get()
  async listAuthors(){
    const response = await this.authorService.getAuthor();

    return response;
  }
}
