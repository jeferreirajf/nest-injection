import { Controller, Get } from '@nestjs/common';
import { HelloWorldUsecase } from './providers/hello-world/hello-world.provider';

@Controller()
export class AppController {
  constructor(private readonly useCase: HelloWorldUsecase) {}

  @Get()
  async getHello(): Promise<string> {
    const result = await this.useCase.execute('NestJS');
    return result;
  }
}
