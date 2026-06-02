import { PrismaService } from '../../infra/database/prisma.service.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TestPostService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    return await this.prismaService.post.findMany();
  }

  async create() {
    const createTestUser = {
      email: 'test@example.com',
      name: 'Test User',
    };
    await this.prismaService.user.create({
      data: createTestUser,
    });

    const testPostData = {
      title: 'Test Post',
      authorId: 1,
      content: 'This is a test post created by TestPostService.',
      published: false,
    };
    await this.prismaService.post.create({
      data: testPostData,
    });
  }
}
