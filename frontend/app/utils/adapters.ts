import type { Media } from '~/data/placeholder'
import type { MovieCard, TvCard, TrendingItem, Movie, TvShow, SearchResult } from '~/types/api'
import type { VidLinkEntry } from '~/stores/progress'

export function fromMovieCard(m: MovieCard): Media {
  return {
    id: m.id,
    tmdbId: m.id,
    title: m.title,
    year: Number(m.year) || 0,
    rating: m.rating,
    poster: m.poster ?? '',
    backdrop: m.backdrop ?? '',
    type: 'movie',
    genre: [],
    description: m.overview,
    duration: '',
    cast: [],
  }
}

export function fromTvCard(m: TvCard): Media {
  return {
    id: m.id,
    tmdbId: m.id,
    title: m.name,
    year: Number(m.firstAirYear) || 0,
    rating: m.rating,
    poster: m.poster ?? '',
    backdrop: m.backdrop ?? '',
    type: 'series',
    genre: [],
    description: m.overview,
    duration: '',
    cast: [],
  }
}

export function fromTrending(m: TrendingItem): Media {
  return {
    id: m.id,
    tmdbId: m.id,
    title: m.title,
    year: Number(m.year) || 0,
    rating: m.rating ?? 0,
    poster: m.poster ?? '',
    backdrop: m.backdrop ?? '',
    type: m.mediaType === 'tv' ? 'series' : 'movie',
    genre: [],
    description: m.overview,
    duration: '',
    cast: [],
  }
}

export function fromSearchResult(m: SearchResult): Media {
  return {
    id: m.id,
    tmdbId: m.id,
    title: m.title,
    year: Number(m.year) || 0,
    rating: m.rating ?? 0,
    poster: m.poster ?? '',
    backdrop: '',
    type: m.mediaType === 'tv' ? 'series' : 'movie',
    genre: [],
    description: m.overview,
    duration: '',
    cast: [],
  }
}

export function fromMovie(m: Movie): Media {
  return {
    id: m.id,
    tmdbId: m.id,
    title: m.title,
    year: Number(m.year) || 0,
    rating: m.rating,
    poster: m.poster ?? '',
    backdrop: m.backdrop ?? '',
    type: 'movie',
    genre: m.genres.map(g => g.name),
    description: m.overview,
    duration: m.runtime ? `${Math.floor(m.runtime / 60)}h ${m.runtime % 60}m` : '',
    cast: m.cast.map(c => ({ name: c.name, role: c.character, avatar: c.avatar ?? '', personId: c.personId })),
    trailerKey: m.trailerKey ?? undefined,
    collectionId: m.collectionId ?? undefined,
    collectionName: m.collectionName ?? undefined,
  }
}

export function fromTvShow(m: TvShow): Media {
  return {
    id: m.id,
    tmdbId: m.id,
    title: m.name,
    year: Number(m.firstAirYear) || 0,
    rating: m.rating,
    poster: m.poster ?? '',
    backdrop: m.backdrop ?? '',
    type: 'series',
    genre: m.genres.map(g => g.name),
    description: m.overview,
    duration: '',
    cast: m.cast.map(c => ({ name: c.name, role: c.character, avatar: c.avatar ?? '', personId: c.personId })),
    seasons: m.numberOfSeasons,
    episodes: m.numberOfEpisodes,
    trailerKey: m.trailerKey ?? undefined,
  }
}

export function fromVidLink(e: VidLinkEntry): Media {
  return {
    id: e.id,
    tmdbId: e.id,
    title: e.title,
    year: 0,
    rating: 0,
    poster: e.poster_path ? `https://image.tmdb.org/t/p/w500${e.poster_path}` : '',
    backdrop: e.backdrop_path ? `https://image.tmdb.org/t/p/w1280${e.backdrop_path}` : '',
    type: e.type === 'tv' ? 'series' : 'movie',
    genre: [],
    description: '',
    duration: '',
    cast: [],
    progress: e.progress?.duration
      ? Math.min(100, Math.round((e.progress.watched / e.progress.duration) * 100))
      : 0,
  }
}
