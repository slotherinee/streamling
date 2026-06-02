import { Controller, Get, Post } from '@nestjs/common';
import { TestPostService } from './test-post.service.js';

@Controller('test-post')
export class TestPostController {
  constructor(private readonly testPostService: TestPostService) {}

  @Get()
  async getTestPosts() {
    return await this.testPostService.getAll();
  }

  @Post()
  async createTestPost() {
    return await this.testPostService.create();
  }
}
