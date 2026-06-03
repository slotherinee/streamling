import { Module } from '@nestjs/common';
import { PrismaModule } from '@infra/database/prisma.module';
import { TestPostModule } from '@modules/test-post/test-post.module';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './modules/health/health.module';
import configuration from '@infra/config/configuration';
import { AppLoggerModule } from '@infra/logger/logger.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    AppLoggerModule,
    PrismaModule,
    TestPostModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
