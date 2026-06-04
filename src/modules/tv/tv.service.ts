import { Injectable } from '@nestjs/common';
import { TmdbService } from '@infra/tmdb/tmdb.service';
import { normalizeTv, normalizeTvCard, normalizeSeason } from './tv.normalizer';
import { Season, TvCard, TvShow } from './interfaces/tv.interfaces';

@Injectable()
export class TvService {
  constructor(private readonly tmdb: TmdbService) {}

  async getTv(id: number, lang = 'en'): Promise<TvShow> {
    const raw = await this.tmdb.getTv(id, lang);
    return normalizeTv(raw);
  }

  async getSeason(id: number, seasonNumber: number, lang = 'en'): Promise<Season> {
    const raw = await this.tmdb.getTvSeason(id, seasonNumber, lang);
    return normalizeSeason(raw);
  }

  async getList(
    list: 'popular' | 'top_rated' | 'airing_today' | 'on_the_air',
    page = 1,
    lang = 'en',
  ): Promise<{ page: number; totalPages: number; results: TvCard[] }> {
    const raw: any = await this.tmdb.getTvList(list, page, lang);
    return {
      page: raw.page,
      totalPages: raw.total_pages,
      results: raw.results.map(normalizeTvCard),
    };
  }
}
