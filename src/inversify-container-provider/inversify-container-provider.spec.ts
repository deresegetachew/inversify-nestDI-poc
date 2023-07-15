import { Test, TestingModule } from '@nestjs/testing';
import { InversifyContainerProvider } from './inversify-container-provider';

describe('InversifyContainerProvider', () => {
  let provider: InversifyContainerProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InversifyContainerProvider],
    }).compile();

    provider = module.get<InversifyContainerProvider>(InversifyContainerProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
