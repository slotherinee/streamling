import { Injectable } from '@nestjs/common';
import { TmdbService } from '@infra/tmdb/tmdb.service';
import { normalizeSearchResult } from './search.normalizer';
import type { SearchResult, SearchType } from './interfaces/search.interfaces';

@Injectable()
export class SearchService {
  constructor(private readonly tmdb: TmdbService) {}

  async search(
    query: string,
    type: SearchType = 'multi',
    page = 1,
  ): Promise<{ page: number; totalPages: number; results: SearchResult[] }> {
    const raw: any = await this.tmdb.search(type, query, page);

    const results: SearchResult[] = raw.results
      .map((item: any) => ({
        ...item,
        media_type: item.media_type ?? type,
      }))
      .filter((item: any) =>
        ['movie', 'tv', 'person'].includes(item.media_type),
      )
      .map(normalizeSearchResult);

    return {
      page: raw.page,
      totalPages: raw.total_pages,
      results,
    };
  }
}
