import { img } from '@infra/tmdb/tmdb.helpers';
import type { MovieCard, Movie } from './interfaces/movies.interfaces';

export function normalizeMovieCard(raw: any): MovieCard {
  return {
    id:        raw.id,
    title:     raw.title,
    poster:    img.poster(raw.poster_path),
    backdrop:  img.backdrop(raw.backdrop_path),
    rating:    raw.vote_average ?? 0,
    voteCount: raw.vote_count ?? 0,
    year:      raw.release_date ? raw.release_date.slice(0, 4) : null,
    overview:  raw.overview ?? '',
  };
}

function getCertification(raw: any): string | null {
  const usRelease = raw.release_dates?.results?.find((r: any) => r.iso_3166_1 === 'US');
  return usRelease?.release_dates?.find((d: any) => d.certification)?.certification ?? null;
}

export function normalizeMovie(raw: any): Movie {
  const trailer =
    raw.videos?.results?.find(
      (v: any) => v.type === 'Trailer' && v.site === 'YouTube',
    ) ?? null;

  const crew = (raw.credits?.crew ?? [])
    .filter((c: any) => ['Director', 'Screenplay', 'Writer', 'Story'].includes(c.job))
    .map((c: any) => ({ personId: c.id, name: c.name, job: c.job }));

  return {
    ...normalizeMovieCard(raw),
    tagline:            raw.tagline ?? '',
    runtime:            raw.runtime ?? null,
    genres:             raw.genres ?? [],
    collectionId:       raw.belongs_to_collection?.id ?? null,
    collectionName:     raw.belongs_to_collection?.name ?? null,
    trailerKey:         trailer?.key ?? null,
    budget:             raw.budget || null,
    revenue:            raw.revenue || null,
    certification:      getCertification(raw),
    originCountry:      raw.origin_country ?? [],
    spokenLanguages:    (raw.spoken_languages ?? []).map((l: any) => ({
      name: l.name,
      englishName: l.english_name,
    })),
    productionCompanies: (raw.production_companies ?? []).map((c: any) => ({
      id: c.id,
      name: c.name,
      logo: img.logo(c.logo_path),
    })),
    keywords: raw.keywords?.keywords?.map((k: any) => k.name) ?? [],
    cast: (raw.credits?.cast ?? []).slice(0, 20).map((c: any) => ({
      personId:  c.id,
      name:      c.name,
      character: c.character,
      avatar:    img.profile(c.profile_path),
    })),
    crew,
    similar:         raw.similar?.results?.slice(0, 10).map(normalizeMovieCard) ?? [],
    recommendations: raw.recommendations?.results?.slice(0, 10).map(normalizeMovieCard) ?? [],
  };
}
