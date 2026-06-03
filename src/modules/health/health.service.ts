import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma.service';

@Injectable()
export class HealthService {
  constructor(private readonly prismaService: PrismaService) {}

  appLiveness() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }

  async dbLiveness() {
    try {
      await this.prismaService.$queryRaw`SELECT 1`;
      return { status: 'ok', db: 'connected' };
    } catch {
      throw new ServiceUnavailableException({
        status: 'error',
        db: 'disconnected',
      });
    }
  }
}
