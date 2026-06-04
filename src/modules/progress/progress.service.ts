import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma.service';
import { ProgressDto } from './dto/progress.dto';

@Injectable()
export class ProgressService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(userId: string) {
    return this.prisma.progress.findMany({
      where:   { userId },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async getOne(userId: string, tmdbId: number, mediaType: string) {
    return this.prisma.progress.findUnique({
      where: {
        userId_tmdbId_mediaType: { userId, tmdbId, mediaType },
      },
    });
  }

  async upsert(userId: string, dto: ProgressDto) {
    return this.prisma.progress.upsert({
      where: {
        userId_tmdbId_mediaType: {
          userId,
          tmdbId:    dto.tmdbId,
          mediaType: dto.mediaType,
        },
      },
      create: {
        userId,
        tmdbId:    dto.tmdbId,
        mediaType: dto.mediaType,
        percent:   dto.percent ?? 0,
        season:    dto.season,
        episode:   dto.episode,
      },
      update: {
        percent: dto.percent,
        season:  dto.season,
        episode: dto.episode,
      },
    });
  }
}
