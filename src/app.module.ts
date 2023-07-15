import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InversifyContainerProvider } from './inversify-container-provider/inversify-container-provider';
import { ServiceLocatorForOldCode } from './service-locator-for-old-code/service-locator.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, InversifyContainerProvider, ServiceLocatorForOldCode],
})
export class AppModule {}
