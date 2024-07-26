/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {

  const logger = new Logger('OrdersMS-Main')

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule, {
    transport: Transport.NATS,
    options: {
      servers: envs.natsServers,
    }
  });

  await app.listen();

  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  })

  logger.log(`Orders microservice running on port ${envs.port}`);


}
bootstrap();
