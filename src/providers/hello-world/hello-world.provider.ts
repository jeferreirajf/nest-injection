import { Injectable } from '@nestjs/common';
import { HelloWorldUsecase as Usecase } from 'src/usecases/hello-world.usecase';

@Injectable()
export abstract class HelloWorldUsecase {
  public abstract execute(input: string): Promise<string>;
}

export const HelloWorldUsecaseProvider = {
  provide: HelloWorldUsecase,
  useValue: Usecase.create(),
};
