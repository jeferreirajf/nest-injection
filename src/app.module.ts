import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloWorldUsecaseProvider } from './providers/hello-world/hello-world.provider';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, HelloWorldUsecaseProvider],
})
export class AppModule {}
