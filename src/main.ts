import { NestFactory } from '@nestjs/core';
import { BaseModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(BaseModule);
  await app.listen(5959);
}
bootstrap();
