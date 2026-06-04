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
  collectionName: string | null;
}