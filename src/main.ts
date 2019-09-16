import { NestFactory } from '@nestjs/core';

import { AppModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(5959);
}
bootstrap();
