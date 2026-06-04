import { Injectable } from '@nestjs/common';
import { TmdbService } from '@infra/tmdb/tmdb.service';
import { SORT_MAP } from '@infra/tmdb/tmdb.helpers';
import { normalizeMovieCard } from '@modules/movies/movies.normalizer';
import { normalizeTvCard } from '@modules/tv/tv.normalizer';
import { GenresService } from '@modules/genres/genres.service';
import { DiscoverQueryDto } from './dto/discover-query.dto';

@Injectable()
export class DiscoverService {
  constructor(
    private readonly tmdb: TmdbService,
    private readonly genres: GenresService,
  ) {}

  async discoverMovies(dto: DiscoverQueryDto, lang = 'en') {
    const params = await this.buildParams(dto, 'movie', lang);
    const raw: any = await this.tmdb.discover('movie', params, lang);
    return {
      page: raw.page,
      totalPages: raw.total_pages,
      results: raw.results.map(normalizeMovieCard),
    };
  }

  async discoverTv(dto: DiscoverQueryDto, lang = 'en') {
    const params = await this.buildParams(dto, 'tv', lang);
    const raw: any = await this.tmdb.discover('tv', params, lang);
    return {
      page: raw.page,
      totalPages: raw.total_pages,
      results: raw.results.map(normalizeTvCard),
    };
  }

  private async buildParams(
    dto: DiscoverQueryDto,
    type: 'movie' | 'tv',
    lang = 'en',
  ): Promise<Record<string, unknown>> {
    const params: Record<string, unknown> = { page: dto.page ?? 1 };

    if (dto.genre) {
      const map = await this.genres.getGenreMap(type, lang);
      const genreId = map.get(dto.genre.toLowerCase());
      if (genreId) params['with_genres'] = genreId;
    }

    if (dto.yearFrom || dto.yearTo) {
      if (type === 'movie') {
        if (dto.yearFrom)
          params['primary_release_date.gte'] = `${dto.yearFrom}-01-01`;
        if (dto.yearTo)
          params['primary_release_date.lte'] = `${dto.yearTo}-12-31`;
      } else {
        if (dto.yearFrom)
          params['first_air_date.gte'] = `${dto.yearFrom}-01-01`;
        if (dto.yearTo) params['first_air_date.lte'] = `${dto.yearTo}-12-31`;
      }
    }

    if (dto.ratingMin !== undefined) {
      params['vote_average.gte'] = dto.ratingMin;
      params['vote_count.gte'] = 100;
    }

    if (dto.sortBy) {
      params['sort_by'] = SORT_MAP[dto.sortBy] ?? 'popularity.desc';
    }

    return params;
  }
}
