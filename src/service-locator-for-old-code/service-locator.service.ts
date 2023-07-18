import { Inject, Injectable } from '@nestjs/common';
import { InversifyContainerProvider } from 'src/inversify-container-provider/inversify-container-provider';

@Injectable()
export class ServiceLocatorForOldCode {
  constructor(
    @Inject(InversifyContainerProvider)
    private readonly inversifyContainerProvider: InversifyContainerProvider,
  ) {}

  get<T>(identifier: string | symbol | (new (...args: any[]) => T)): T {
    return this.inversifyContainerProvider
      .getContainer(identifier)
      .get<T>(identifier);
  }
}
