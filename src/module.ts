import { Module, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CorsMiddleware } from '@nest-middlewares/cors';
import { MorganMiddleware } from '@nest-middlewares/morgan';

// import { AuthMiddleware } from './middleware/auth';

import { userSchema } from './models';
import { UserController } from './controllers';
import { UserService } from './services';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:password@127.0.0.1:27019/blog?authSource=admin', { useNewUrlParser: true }),
    MongooseModule.forFeature([
      { name: 'User', schema: userSchema },
    ])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {
  static configure(consumer: MiddlewareConsumer) {
    MorganMiddleware.configure('dev')
    consumer
      .apply(CorsMiddleware, MorganMiddleware)
      .forRoutes(UserController)
  }
}
