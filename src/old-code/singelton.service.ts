// singleton.service.ts
import { injectable } from 'inversify';

@injectable()
export class SingletonService {
  private readonly createdAt: Date;

  constructor() {
    this.createdAt = new Date();
  }

  public getCreationTime(): string {
    return this.createdAt.toISOString();
  }
}
