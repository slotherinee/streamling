import { Module } from '@nestjs/common';
import { TestPostService } from './test-post.service.js';
import { TestPostController } from './test-post.controller.js';

@Module({
  controllers: [TestPostController],
  providers: [TestPostService],
})
export class TestPostModule {}
