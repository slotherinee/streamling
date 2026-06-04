export interface TvCard {
  id: number;
  name: string;
  poster: string | null;
  backdrop: string | null;
  rating: number;
  voteCount: number;
  firstAirYear: string | null;
  overview: string;
}

export interface TvShow extends TvCard {
  tagline: string;
  genres: { id: number; name: string }[];
  numberOfSeasons: number;
  numberOfEpisodes: number;
  status: string;
  inProduction: boolean;
  lastAirDate: string | null;
  nextEpisode: { name: string; airDate: string; episodeNumber: number; seasonNumber: number } | null;
  networks: { id: number; name: string; logo: string | null }[];
  creators: { personId: number; name: string; avatar: string | null }[];
  originCountry: string[];
  keywords: string[];
  cast: {
    personId: number;
    name: string;
    character: string;
    avatar: string | null;
  }[];
  trailerKey: string | null;
  similar: TvCard[];
  recommendations: TvCard[];
}

export interface Season {
  id: number;
  seasonNumber: number;
  name: string;
  overview: string;
  poster: string | null;
  airDate: string | null;
  episodes: {
    id: number;
    episodeNumber: number;
    name: string;
    overview: string;
    still: string | null;
    runtime: number | null;
    airDate: string | null;
  }[];
}
