import type { MovieCard } from '@modules/movies/interfaces/movies.interfaces';

export interface Collection {
  id: number;
  name: string;
  overview: string;
  poster: string | null;
  backdrop: string | null;
  parts: MovieCard[];
}
