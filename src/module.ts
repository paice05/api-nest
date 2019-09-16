import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { authorSchema, AuthorController, AuthorService } from './author';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:password@127.0.0.1:27019/blog?authSource=admin'),
    MongooseModule.forFeature([
      { name: 'Author', schema: authorSchema }
    ])
  ],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class BaseModule { }
