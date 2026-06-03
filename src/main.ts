import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  await app.listen(Number(process.env.PORT ?? 4000));
}
bootstrap().catch((error) =>
  console.error(`[ERROR]: ${JSON.stringify(error)}`),
);
