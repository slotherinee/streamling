export interface TvCard {
  id: number;
  name: string;
  poster: string | null;
  backdrop: string | null;
  rating: number;
  firstAirYear: string | null;
  overview: string;
}

export interface TvShow extends TvCard {
  tagline: string;
  genres: { id: number; name: string }[];
  numberOfSeasons: number;
  numberOfEpisodes: number;
  status: string;
  cast: {
    id: number;
    name: string;
    character: string;
    profile: string | null;
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
