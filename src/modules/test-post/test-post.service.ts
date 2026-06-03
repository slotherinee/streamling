import { PrismaService } from '@infra/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TestPostService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    return await this.prismaService.post.findMany();
  }

  async create() {
    const testPostData = {
      title: 'Test Post 2',
      authorId: 1,
      content: 'This is a test post created by TestPostService. 2222',
      published: true,
    };
    await this.prismaService.post.create({
      data: testPostData,
    });
  }
}
