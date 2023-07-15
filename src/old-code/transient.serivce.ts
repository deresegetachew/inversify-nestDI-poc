// transient.service.ts
import { injectable } from 'inversify';

@injectable()
export class TransientService {
  private readonly createdAt: Date;

  constructor() {
    this.createdAt = new Date();
  }

  public getCreationTime(): string {
    return this.createdAt.toISOString();
  }
}
