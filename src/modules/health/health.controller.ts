import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma.service';
import { HealthService } from './health.service';
import { Public } from '@common/decorators/public.decorator';

@Public()
@Controller('health')
export class HealthController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly healthService: HealthService,
  ) {}

  @Get()
  liveness() {
    return this.healthService.appLiveness();
  }

  @Get('db')
  async readiness() {
    return await this.healthService.dbLiveness();
  }
}
