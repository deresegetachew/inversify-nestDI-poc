import { Injectable } from '@nestjs/common';
import { SingletonService } from './old-code/singelton.service';
import { TransientService } from './old-code/transient.serivce';
import { ServiceLocatorForOldCode } from './service-locator-for-old-code/service-locator.service';
import { ChildService } from './old-code/child.service';

@Injectable()
export class AppService {
  constructor(
    private readonly serviceLocatorForOldCode: ServiceLocatorForOldCode,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getSingletonServiceCreationTime(): string {
    return this.serviceLocatorForOldCode
      .get<SingletonService>(SingletonService)
      .getCreationTime();
  }

  getTransientServiceCreationTime(): string {
    return this.serviceLocatorForOldCode
      .get<TransientService>(TransientService)
      .getCreationTime();
  }

  greetingsFromChildContainer(): string {
    return this.serviceLocatorForOldCode
      .get<ChildService>(ChildService)
      .childMethod();
  }

  getConstantFromChild(): string {
    return this.serviceLocatorForOldCode
      .get<ChildService>(ChildService)
      .getConstantValue();
  }

  getDynamicFromChild(): string {
    return this.serviceLocatorForOldCode
      .get<ChildService>(ChildService)
      .getDynamicValue();
  }
}
