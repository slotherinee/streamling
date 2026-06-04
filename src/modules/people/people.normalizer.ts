import { img } from '@infra/tmdb/tmdb.helpers';
import type {
  Person,
  PersonCard,
  CreditItem,
} from './interfaces/people.interfaces';

export function normalizePersonCard(raw: any): PersonCard {
  return {
    id: raw.id,
    name: raw.name,
    profile: img.profile(raw.profile_path),
    knownForDepartment: raw.known_for_department ?? '',
    popularity: raw.popularity ?? 0,
  };
}

export function normalizePerson(raw: any): Person {
  const credits: CreditItem[] = [
    ...(raw.combined_credits?.cast ?? []).map((c: any) => ({
      id: c.id,
      mediaType: c.media_type as 'movie' | 'tv',
      title: c.title ?? c.name,
      poster: img.poster(c.poster_path),
      character: c.character ?? '',
      year: c.release_date
        ? c.release_date.slice(0, 4)
        : c.first_air_date
          ? c.first_air_date.slice(0, 4)
          : null,
      rating: c.vote_average ?? 0,
    })),
  ]
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, 200);

  return {
    ...normalizePersonCard(raw),
    biography:    raw.biography ?? '',
    birthday:     raw.birthday ?? null,
    deathday:     raw.deathday ?? null,
    placeOfBirth: raw.place_of_birth ?? null,
    gender:       raw.gender ?? null,
    alsoKnownAs:  raw.also_known_as ?? [],
    credits,
  };
}
