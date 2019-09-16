import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { authorSchema, postSchema } from './models';
import { AuthorController, PostController } from './controllers';
import { AuthorService, PostService } from './services';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:password@127.0.0.1:27019/blog?authSource=admin'),
    MongooseModule.forFeature([
      { name: 'Author', schema: authorSchema },
      { name: 'Post', schema: postSchema }
    ])
  ],
  controllers: [AuthorController, PostController],
  providers: [AuthorService, PostService],
})
export class BaseModule { }
