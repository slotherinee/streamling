import { Module } from '@nestjs/common';
import { PrismaModule } from '@infra/database/prisma.module';
import { TestPostModule } from '@modules/test-post/test-post.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '@infra/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    PrismaModule,
    TestPostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
