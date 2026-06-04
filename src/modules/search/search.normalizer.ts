import { img } from '@infra/tmdb/tmdb.helpers';
import type { SearchResult } from './interfaces/search.interfaces';

export function normalizeSearchResult(raw: any): SearchResult {
  const mediaType: 'movie' | 'tv' | 'person' = raw.media_type;

  const title =
    mediaType === 'movie'
      ? raw.title
      : mediaType === 'tv'
        ? raw.name
        : raw.name;

  const year =
    mediaType === 'movie' && raw.release_date
      ? raw.release_date.slice(0, 4)
      : mediaType === 'tv' && raw.first_air_date
        ? raw.first_air_date.slice(0, 4)
        : null;

  return {
    id: raw.id,
    mediaType,
    title,
    poster: img.poster(raw.poster_path ?? raw.profile_path),
    rating: raw.vote_average ?? null,
    year,
    overview: raw.overview ?? '',
  };
}
