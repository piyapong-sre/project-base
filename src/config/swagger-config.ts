import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('API Example')
  .setDescription('API documentation for our application')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
