import { Injectable } from '@nestjs/common';
import { TmdbHttpService } from './tmdb.http.service';
import { TTL } from './tmdb.helpers';

@Injectable()
export class TmdbService {
  constructor(private readonly http: TmdbHttpService) {}

  private language(lang: string): string {
    return lang === 'ru' ? 'ru-RU' : 'en-US';
  }

  // Movies
  getMovie(id: number, lang = 'en') {
    return this.http.get(
      `/movie/${id}`,
      {
        append_to_response: 'credits,videos,similar,recommendations,release_dates,keywords',
        language: this.language(lang),
      },
      TTL.MOVIE_DETAIL,
    );
  }

  getMovieList(list: string, page = 1, lang = 'en') {
    return this.http.get(`/movie/${list}`, { page, language: this.language(lang) }, TTL.SHORT);
  }

  // TV
  getTv(id: number, lang = 'en') {
    return this.http.get(
      `/tv/${id}`,
      {
        append_to_response: 'credits,videos,similar,recommendations,keywords',
        language: this.language(lang),
      },
      TTL.TV_DETAIL,
    );
  }

  getTvSeason(id: number, seasonNumber: number, lang = 'en') {
    return this.http.get(
      `/tv/${id}/season/${seasonNumber}`,
      { language: this.language(lang) },
      TTL.TV_DETAIL,
    );
  }

  getTvList(list: string, page = 1, lang = 'en') {
    return this.http.get(`/tv/${list}`, { page, language: this.language(lang) }, TTL.SHORT);
  }

  // People
  getPerson(id: number, lang = 'en') {
    return this.http.get(
      `/person/${id}`,
      { append_to_response: 'combined_credits,images', language: this.language(lang) },
      TTL.LONG,
    );
  }

  getPopularPeople(page = 1, lang = 'en') {
    return this.http.get('/person/popular', { page, language: this.language(lang) }, TTL.SHORT);
  }

  // Collections
  getCollection(id: number) {
    return this.http.get(`/collection/${id}`, {}, TTL.LONG);
  }

  // Search
  search(type: string, query: string, page = 1, lang = 'en') {
    return this.http.get(
      `/search/${type}`,
      { query, page, language: this.language(lang) },
      TTL.SHORT,
    );
  }

  // Discover
  discover(type: string, params: Record<string, unknown>, lang = 'en') {
    return this.http.get(
      `/discover/${type}`,
      { ...params, language: this.language(lang) },
      TTL.SHORT,
    );
  }

  // Trending
  getTrending(type: string, timeWindow: string, lang = 'en') {
    return this.http.get(
      `/trending/${type}/${timeWindow}`,
      { language: this.language(lang) },
      TTL.SHORT,
    );
  }

  // Genres
  getGenres(type: string, lang = 'en') {
    return this.http.get(`/genre/${type}/list`, { language: this.language(lang) }, TTL.LONG);
  }
}
