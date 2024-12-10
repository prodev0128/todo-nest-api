import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Allow CORS for all origins by default
  await app.listen(process.env.PORT ?? 3050);
}

bootstrap();
