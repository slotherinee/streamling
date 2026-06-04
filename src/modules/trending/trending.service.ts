import { Injectable } from '@nestjs/common';
import { TmdbService } from '@infra/tmdb/tmdb.service';
import { normalizeTrendingItem } from './trending.normalizer';
import type {
  TrendingItem,
  TrendingType,
  TimeWindow,
} from './interfaces/trending.interfaces';

@Injectable()
export class TrendingService {
  constructor(private readonly tmdb: TmdbService) {}

  async getTrending(
    type: TrendingType = 'all',
    timeWindow: TimeWindow = 'day',
    lang = 'en',
  ): Promise<{ results: TrendingItem[] }> {
    const raw: any = await this.tmdb.getTrending(type, timeWindow, lang);
    return {
      results: raw.results.map(normalizeTrendingItem),
    };
  }
}
