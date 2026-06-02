import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const connectionString = process.env.DATABASE_URL;

    if (
      typeof connectionString !== 'string' ||
      connectionString.trim() === ''
    ) {
      throw new Error(
        'DATABASE_URL is missing or invalid. Make sure .env is loaded before Prisma initializes.',
      );
    }

    const adapter = new PrismaPg({
      connectionString,
    });
    super({ adapter });
  }
}
