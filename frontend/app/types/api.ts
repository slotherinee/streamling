export interface Genre { id: number; name: string }

export interface CastMember {
  personId: number
  name: string
  character: string
  avatar: string | null
}

export interface CrewMember {
  personId: number
  name: string
  job: string
}

export interface MovieCard {
  id: number
  title: string
  poster: string | null
  backdrop: string | null
  rating: number
  voteCount: number
  year: string | null
  overview: string
}

export interface Movie extends MovieCard {
  tagline: string
  runtime: number | null
  genres: Genre[]
  cast: CastMember[]
  crew: CrewMember[]
  trailerKey: string | null
  similar: MovieCard[]
  recommendations: MovieCard[]
  collectionId: number | null
  collectionName: string | null
  budget: number | null
  revenue: number | null
  certification: string | null
  productionCompanies: { id: number; name: string; logo: string | null }[]
  originCountry: string[]
  spokenLanguages: { name: string; englishName: string }[]
  keywords: string[]
}

export interface TvCard {
  id: number
  name: string
  poster: string | null
  backdrop: string | null
  rating: number
  voteCount: number
  firstAirYear: string | null
  overview: string
}

export interface TvShow extends TvCard {
  tagline: string
  genres: Genre[]
  numberOfSeasons: number
  numberOfEpisodes: number
  status: string
  inProduction: boolean
  lastAirDate: string | null
  nextEpisode: { name: string; airDate: string; episodeNumber: number; seasonNumber: number } | null
  networks: { id: number; name: string; logo: string | null }[]
  creators: { personId: number; name: string; avatar: string | null }[]
  originCountry: string[]
  keywords: string[]
  cast: CastMember[]
  trailerKey: string | null
  seasonPosters: { seasonNumber: number; poster: string | null }[]
  similar: TvCard[]
  recommendations: TvCard[]
}

export interface Season {
  id: number
  seasonNumber: number
  name: string
  overview: string
  poster: string | null
  airDate: string | null
  episodes: {
    id: number
    episodeNumber: number
    name: string
    overview: string
    still: string | null
    runtime: number | null
    airDate: string | null
  }[]
}

export interface TrendingItem {
  id: number
  mediaType: 'movie' | 'tv' | 'person'
  title: string
  poster: string | null
  backdrop: string | null
  rating: number
  year: string | null
  overview: string
}

export interface SearchResult {
  id: number
  mediaType: 'movie' | 'tv' | 'person'
  title: string
  poster: string | null
  rating: number
  year: string | null
  overview: string
}

export interface PersonCard {
  id: number
  name: string
  profile: string | null
  knownForDepartment: string
  popularity: number
}

export interface CreditItem {
  id: number
  mediaType: 'movie' | 'tv'
  title: string
  poster: string | null
  character: string
  year: string | null
  rating: number
}

export interface Person extends PersonCard {
  biography: string
  birthday: string | null
  deathday: string | null
  placeOfBirth: string | null
  gender: number | null
  alsoKnownAs: string[]
  credits: CreditItem[]
}

export interface Collection {
  id: number
  name: string
  overview: string
  poster: string | null
  backdrop: string | null
  parts: MovieCard[]
}

export interface PagedResponse<T> {
  page: number
  totalPages: number
  results: T[]
}
