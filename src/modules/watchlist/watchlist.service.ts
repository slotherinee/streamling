import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma.service';
import { WatchlistDto } from './dto/watchlist.dto';

export interface ToggleResult {
  action: 'added' | 'removed';
  tmdbId: number;
  mediaType: string;
}

@Injectable()
export class WatchlistService {
  constructor(private readonly prisma: PrismaService) {}

  async getWatchlist(userId: string) {
    return this.prisma.watchlist.findMany({
      where:   { userId },
      orderBy: { addedAt: 'desc' },
    });
  }

  async toggle(userId: string, dto: WatchlistDto): Promise<ToggleResult> {
    const existing = await this.prisma.watchlist.findUnique({
      where: {
        userId_tmdbId_mediaType: {
          userId,
          tmdbId:    dto.tmdbId,
          mediaType: dto.mediaType,
        },
      },
    });

    if (existing) {
      await this.prisma.watchlist.delete({ where: { id: existing.id } });
      return { action: 'removed', tmdbId: dto.tmdbId, mediaType: dto.mediaType };
    }

    await this.prisma.watchlist.create({
      data: { userId, tmdbId: dto.tmdbId, mediaType: dto.mediaType },
    });
    return { action: 'added', tmdbId: dto.tmdbId, mediaType: dto.mediaType };
  }

  async remove(userId: string, tmdbId: number, mediaType: string): Promise<void> {
    await this.prisma.watchlist.deleteMany({
      where: { userId, tmdbId, mediaType },
    });
  }
}
