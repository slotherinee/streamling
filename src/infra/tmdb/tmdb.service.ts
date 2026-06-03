import { Injectable } from '@nestjs/common';
import { TmdbHttpService } from './tmdb.http.service';
import { TTL } from './tmdb.helpers';

@Injectable()
export class TmdbService {
  constructor(private readonly http: TmdbHttpService) {}

  // Movies
  getMovie(id: number) {
    return this.http.get(
      `/movie/${id}`,
      { append_to_response: 'credits,videos,similar,recommendations' },
      TTL.MEDIUM,
    );
  }

  getMovieList(list: string, page = 1) {
    return this.http.get(`/movie/${list}`, { page }, TTL.SHORT);
  }

  // TV
  getTv(id: number) {
    return this.http.get(
      `/tv/${id}`,
      { append_to_response: 'credits,videos,similar,recommendations' },
      TTL.MEDIUM,
    );
  }

  getTvSeason(id: number, seasonNumber: number) {
    return this.http.get(`/tv/${id}/season/${seasonNumber}`, {}, TTL.MEDIUM);
  }

  getTvList(list: string, page = 1) {
    return this.http.get(`/tv/${list}`, { page }, TTL.SHORT);
  }

  // People
  getPerson(id: number) {
    return this.http.get(
      `/person/${id}`,
      { append_to_response: 'combined_credits,images' },
      TTL.MEDIUM,
    );
  }

  getPopularPeople(page = 1) {
    return this.http.get('/person/popular', { page }, TTL.SHORT);
  }

  // Collections
  getCollection(id: number) {
    return this.http.get(`/collection/${id}`, {}, TTL.LONG);
  }

  // Search
  search(type: string, query: string, page = 1) {
    return this.http.get(`/search/${type}`, { query, page }, TTL.SHORT);
  }

  // Discover
  discover(type: string, params: Record<string, unknown>) {
    return this.http.get(`/discover/${type}`, params, TTL.SHORT);
  }

  // Trending
  getTrending(type: string, timeWindow: string) {
    return this.http.get(`/trending/${type}/${timeWindow}`, {}, TTL.SHORT);
  }

  // Genres
  getGenres(type: string) {
    return this.http.get(`/genre/${type}/list`, {}, TTL.LONG);
  }
}
