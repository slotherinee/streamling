import { Injectable } from '@nestjs/common';
import { TmdbService } from '@infra/tmdb/tmdb.service';
import { Genre } from './interfaces/genres.interfaces';

@Injectable()
export class GenresService {
  constructor(private readonly tmdb: TmdbService) {}

  async getMovieGenres(): Promise<Genre[]> {
    const raw: any = await this.tmdb.getGenres('movie');
    return raw.genres as Genre[];
  }

  async getTvGenres(): Promise<Genre[]> {
    const raw: any = await this.tmdb.getGenres('tv');
    return raw.genres as Genre[];
  }

  async getGenreMap(type: 'movie' | 'tv'): Promise<Map<string, number>> {
    const genres = type === 'movie'
      ? await this.getMovieGenres()
      : await this.getTvGenres();

    return new Map(genres.map((g) => [g.name.toLowerCase(), g.id]));
  }
}
