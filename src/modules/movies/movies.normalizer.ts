import { img } from '@infra/tmdb/tmdb.helpers';

export interface MovieCard {
  id: number;
  title: string;
  poster: string | null;
  backdrop: string | null;
  rating: number;
  year: string | null;
  overview: string;
}

export interface Movie extends MovieCard {
  tagline: string;
  runtime: number | null;
  genres: { id: number; name: string }[];
  cast: {
    id: number;
    name: string;
    character: string;
    profile: string | null;
  }[];
  trailerKey: string | null;
  similar: MovieCard[];
  recommendations: MovieCard[];
  collectionId: number | null;
}

export function normalizeMovieCard(raw: any): MovieCard {
  return {
    id:       raw.id,
    title:    raw.title,
    poster:   img.poster(raw.poster_path),
    backdrop: img.backdrop(raw.backdrop_path),
    rating:   raw.vote_average ?? 0,
    year:     raw.release_date ? raw.release_date.slice(0, 4) : null,
    overview: raw.overview ?? '',
  };
}

export function normalizeMovie(raw: any): Movie {
  const trailer =
    raw.videos?.results?.find(
      (v: any) => v.type === 'Trailer' && v.site === 'YouTube',
    ) ?? null;

  return {
    ...normalizeMovieCard(raw),
    tagline:         raw.tagline ?? '',
    runtime:         raw.runtime ?? null,
    genres:          raw.genres ?? [],
    collectionId:    raw.belongs_to_collection?.id ?? null,
    trailerKey:      trailer?.key ?? null,
    cast:
      raw.credits?.cast?.slice(0, 20).map((c: any) => ({
        id:        c.id,
        name:      c.name,
        character: c.character,
        profile:   img.profile(c.profile_path),
      })) ?? [],
    similar:
      raw.similar?.results?.slice(0, 10).map(normalizeMovieCard) ?? [],
    recommendations:
      raw.recommendations?.results?.slice(0, 10).map(normalizeMovieCard) ?? [],
  };
}
