import { img } from '@infra/tmdb/tmdb.helpers';
import type { TvCard, TvShow, Season } from './interfaces/tv.interfaces';

export function normalizeTvCard(raw: any): TvCard {
  return {
    id: raw.id,
    name: raw.name,
    poster: img.poster(raw.poster_path),
    backdrop: img.backdrop(raw.backdrop_path),
    rating: raw.vote_average ?? 0,
    firstAirYear: raw.first_air_date ? raw.first_air_date.slice(0, 4) : null,
    overview: raw.overview ?? '',
  };
}

export function normalizeTv(raw: any): TvShow {
  const trailer =
    raw.videos?.results?.find(
      (v: any) => v.type === 'Trailer' && v.site === 'YouTube',
    ) ?? null;

  return {
    ...normalizeTvCard(raw),
    tagline: raw.tagline ?? '',
    genres: raw.genres ?? [],
    numberOfSeasons: raw.number_of_seasons ?? 0,
    numberOfEpisodes: raw.number_of_episodes ?? 0,
    status: raw.status ?? '',
    trailerKey: trailer?.key ?? null,
    cast:
      raw.credits?.cast?.slice(0, 20).map((c: any) => ({
        id: c.id,
        name: c.name,
        character: c.character,
        profile: img.profile(c.profile_path),
      })) ?? [],
    similar: raw.similar?.results?.slice(0, 10).map(normalizeTvCard) ?? [],
    recommendations:
      raw.recommendations?.results?.slice(0, 10).map(normalizeTvCard) ?? [],
  };
}

export function normalizeSeason(raw: any): Season {
  return {
    id: raw.id,
    seasonNumber: raw.season_number,
    name: raw.name,
    overview: raw.overview ?? '',
    poster: img.poster(raw.poster_path),
    airDate: raw.air_date ?? null,
    episodes:
      raw.episodes?.map((e: any) => ({
        id: e.id,
        episodeNumber: e.episode_number,
        name: e.name,
        overview: e.overview ?? '',
        still: img.still(e.still_path),
        runtime: e.runtime ?? null,
        airDate: e.air_date ?? null,
      })) ?? [],
  };
}
