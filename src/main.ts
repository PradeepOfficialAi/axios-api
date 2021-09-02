import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('User Authentication')
  .setDescription('simple auth verification is going on')
  .setVersion('1.0')
  .addTag('user')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)
  await app.listen(3000);
  console.log(`Server running here ${await app.getUrl()}`);
  
}
bootstrap();
