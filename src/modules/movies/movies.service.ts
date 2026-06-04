import { Injectable } from '@nestjs/common';
import { TmdbService } from '@infra/tmdb/tmdb.service';
import {
  normalizeMovie,
  normalizeMovieCard,
} from './movies.normalizer';
import type { MovieCard, Movie} from './interfaces/movies.interfaces';

@Injectable()
export class MoviesService {
  constructor(private readonly tmdb: TmdbService) {}

  async getMovie(id: number, lang = 'en'): Promise<Movie> {
    const raw = await this.tmdb.getMovie(id, lang);
    return normalizeMovie(raw);
  }

  async getList(
    list: 'popular' | 'top_rated' | 'now_playing' | 'upcoming',
    page = 1,
    lang = 'en',
  ): Promise<{ page: number; totalPages: number; results: MovieCard[] }> {
    const raw: any = await this.tmdb.getMovieList(list, page, lang);
    return {
      page:       raw.page,
      totalPages: raw.total_pages,
      results:    raw.results.map(normalizeMovieCard),
    };
  }
}
