import { Module } from '@nestjs/common';
import { PrismaModule } from './infra/database/prisma.module.js';
import { TestPostModule } from './modules/test-post/test-post.module.js';

@Module({
  imports: [PrismaModule, TestPostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
