import { IsIn, IsInt, IsOptional, Max, Min } from 'class-validator';

export class ProgressDto {
  @IsInt()
  tmdbId: number;

  @IsIn(['movie', 'tv'])
  mediaType: 'movie' | 'tv';

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100)
  percent?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  season?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  episode?: number;
}
