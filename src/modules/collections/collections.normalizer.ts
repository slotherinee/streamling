import { img } from '@infra/tmdb/tmdb.helpers';
import { normalizeMovieCard } from '@modules/movies/movies.normalizer';
import type { Collection } from './interfaces/collections.interfaces';

export function normalizeCollection(raw: any): Collection {
  return {
    id: raw.id,
    name: raw.name,
    overview: raw.overview ?? '',
    poster: img.poster(raw.poster_path),
    backdrop: img.backdrop(raw.backdrop_path),
    parts: (raw.parts ?? [])
      .sort((a: any, b: any) =>
        (a.release_date ?? '').localeCompare(b.release_date ?? ''),
      )
      .map(normalizeMovieCard),
  };
}
