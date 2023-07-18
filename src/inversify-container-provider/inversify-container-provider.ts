import { Injectable } from '@nestjs/common';
import { Container } from 'inversify';
import createContainer from '../old-code/inversify-container';

@Injectable()
export class InversifyContainerProvider {
  private readonly inversifyContainers: Container[];

  constructor() {
    this.inversifyContainers = createContainer();
  }

  getContainer<T>(
    identifier: string | symbol | (new (...args: any[]) => T),
  ): Container {
    return this.inversifyContainers.find((container) =>
      container.isBound(identifier),
    );
  }
}
