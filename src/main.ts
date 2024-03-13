import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors: true});
  await app.listen(8000);
  console.log('Nest application is running on:', app.getHttpServer().address());
}

bootstrap().catch(err => {
  console.error('Error starting Nest application:', err);
});