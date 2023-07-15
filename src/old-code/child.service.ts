import { inject, injectable } from 'inversify';

@injectable()
export class ChildService {
  private readonly constantValue: string;
  private readonly dynamicValue: string;

  constructor(
    @inject('ConstantValue') constantValue: string,
    @inject('DynamicValue') dynamicValue: string,
  ) {
    this.constantValue = constantValue;
    this.dynamicValue = dynamicValue;
  }
  public childMethod(): string {
    return `This is the Child service bound to a child container called through a parent container`;
  }

  public getConstantValue(): string {
    return this.constantValue;
  }

  public getDynamicValue(): string {
    return this.dynamicValue;
  }
}
