export interface TrendingItem {
  id: number;
  mediaType: 'movie' | 'tv' | 'person';
  title: string;
  poster: string | null;
  backdrop: string | null;
  rating: number | null;
  year: string | null;
  overview: string;
}

export type TrendingType = 'all' | 'movie' | 'tv' | 'person';
export type TimeWindow = 'day' | 'week';
