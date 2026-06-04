export interface MovieCard {
  id: number;
  title: string;
  poster: string | null;
  backdrop: string | null;
  rating: number;
  voteCount: number;
  year: string | null;
  overview: string;
}

export interface Movie extends MovieCard {
  tagline: string;
  runtime: number | null;
  genres: { id: number; name: string }[];
  cast: {
    personId: number;
    name: string;
    character: string;
    avatar: string | null;
  }[];
  crew: {
    personId: number;
    name: string;
    job: string;
  }[];
  trailerKey: string | null;
  similar: MovieCard[];
  recommendations: MovieCard[];
  collectionId: number | null;
  collectionName: string | null;
  budget: number | null;
  revenue: number | null;
  certification: string | null;
  productionCompanies: { id: number; name: string; logo: string | null }[];
  originCountry: string[];
  spokenLanguages: { name: string; englishName: string }[];
  keywords: string[];
}
