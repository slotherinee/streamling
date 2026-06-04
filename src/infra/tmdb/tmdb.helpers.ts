const BASE_IMG = 'https://image.tmdb.org/t/p';

export const img = {
  backdrop: (path: string | null) => (path ? `${BASE_IMG}/w1280${path}` : null),
  poster: (path: string | null) => (path ? `${BASE_IMG}/w500${path}` : null),
  still: (path: string | null) => (path ? `${BASE_IMG}/w300${path}` : null),
  profile: (path: string | null) => (path ? `${BASE_IMG}/w185${path}` : null),
  original: (path: string | null) =>
    path ? `${BASE_IMG}/original${path}` : null,
};

export const SORT_MAP: Record<string, string> = {
  popular: 'popularity.desc',
  rating: 'vote_average.desc',
  newest: 'primary_release_date.desc',
  oldest: 'primary_release_date.asc',
};

export const TTL = {
  SHORT:        60 * 30,       // 30 min  — lists, popular, trending
  TV_DETAIL:    60 * 60,       //  1 hour — tv detail (episodes/ratings update)
  MOVIE_DETAIL: 60 * 60 * 24,  // 24 hour — movie detail (static)
  LONG:         60 * 60 * 24,  // 24 hour — genres, collections, static
};
