import { Injectable } from '@nestjs/common';
import { TmdbService } from '@infra/tmdb/tmdb.service';
import { Genre } from './interfaces/genres.interfaces';

@Injectable()
export class GenresService {
  constructor(private readonly tmdb: TmdbService) {}

  async getMovieGenres(lang = 'en'): Promise<Genre[]> {
    const raw: any = await this.tmdb.getGenres('movie', lang);
    return raw.genres as Genre[];
  }

  async getTvGenres(lang = 'en'): Promise<Genre[]> {
    const raw: any = await this.tmdb.getGenres('tv', lang);
    return raw.genres as Genre[];
  }

  async getGenreMap(type: 'movie' | 'tv', lang = 'en'): Promise<Map<string, number>> {
    const genres = type === 'movie'
      ? await this.getMovieGenres(lang)
      : await this.getTvGenres(lang);

    return new Map(genres.map((g) => [g.name.toLowerCase(), g.id]));
  }
}
