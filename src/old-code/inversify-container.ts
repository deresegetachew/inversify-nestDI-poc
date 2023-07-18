import { Container } from 'inversify';

// Services
import { SingletonService } from './singelton.service';
import { TransientService } from './transient.serivce';
import { ChildService } from './child.service';

// Constant Value
const CONSTANT_VALUE = 'Constant Value';

// Dynamic Value
function getDynamicValue(): string {
  return `Dynamic Value - ${Math.random()}`;
}

export function createContainer(): Container[] {
  const parentContainer = new Container();

  // Bind services with different scopes

  parentContainer
    .bind<SingletonService>(SingletonService)
    .toSelf()
    .inSingletonScope();

  parentContainer
    .bind<TransientService>(TransientService)
    .toSelf()
    .inTransientScope();

  const childContainer = new Container();
  childContainer.parent = parentContainer;

  childContainer.bind<ChildService>(ChildService).toSelf().inSingletonScope();
  childContainer
    .bind<string>('DynamicValue')
    .toDynamicValue(() => getDynamicValue());

  childContainer.bind<string>('ConstantValue').toConstantValue(CONSTANT_VALUE);

  // set parent container.

  return [parentContainer, childContainer];
}

export default createContainer;
