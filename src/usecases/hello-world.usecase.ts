import { Usecase } from './usecase';

export class HelloWorldUsecase implements Usecase<string, string> {
  private constructor() {}

  public static create() {
    return new HelloWorldUsecase();
  }

  public async execute(input: string): Promise<string> {
    return `Hello world, ${input}`;
  }
}
