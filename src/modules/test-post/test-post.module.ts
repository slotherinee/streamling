import { Module } from '@nestjs/common';
import { TestPostService } from './test-post.service';
import { TestPostController } from './test-post.controller';

@Module({
  controllers: [TestPostController],
  providers: [TestPostService],
})
export class TestPostModule {}
