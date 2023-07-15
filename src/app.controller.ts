import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('singleton')
  getSingletonCreationTime(): string {
    return this.appService.getSingletonServiceCreationTime();
  }

  @Get('transient')
  getTransientCreationTime(): string {
    return this.appService.getTransientServiceCreationTime();
  }

  @Get('childContainer-childMethod')
  greetingsFromChildContainer(): string {
    return this.appService.greetingsFromChildContainer();
  }

  @Get('childContainer-getConstant')
  getConstantFromChildContainer(): string {
    return this.appService.getConstantFromChild();
  }

  @Get('childContainer-getDynamic')
  getDynamicFromChildContainer(): string {
    return this.appService.getDynamicFromChild();
  }
}
