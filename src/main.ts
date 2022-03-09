import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Bots API')
    .setDescription('Test application for Bots CRUDL using NestJS')
    .setVersion('1.0')
    .addTag('bots')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('oas', app, document);

  await app.listen(3000);
}
bootstrap();
