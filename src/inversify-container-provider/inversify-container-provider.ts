import { Injectable } from '@nestjs/common';
import { Container } from 'inversify';
import createContainer from '../old-code/inversify-container';

@Injectable()
export class InversifyContainerProvider {
  private readonly inversifyContainer: Container;

  constructor() {
    this.inversifyContainer = createContainer();
  }

  getContainer(): Container {
    return this.inversifyContainer;
  }
}
