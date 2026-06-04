import { IsIn, IsInt } from 'class-validator';

export class WatchlistDto {
  @IsInt()
  tmdbId: number;

  @IsIn(['movie', 'tv'])
  mediaType: 'movie' | 'tv';
}
