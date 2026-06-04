export interface SearchResult {
  id: number;
  mediaType: 'movie' | 'tv' | 'person';
  title: string;
  poster: string | null;
  rating: number | null;
  year: string | null;
  overview: string;
}

export type SearchType = 'multi' | 'movie' | 'tv' | 'person';
