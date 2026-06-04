import { Controller, Get, Query } from '@nestjs/common';
import { Public } from '@common/decorators/public.decorator';
import { GenresService } from './genres.service';

@Public()
@Controller('genres')
export class GenresController {
  constructor(private readonly genres: GenresService) {}

  @Get('movies')
  getMovieGenres(@Query('lang') lang = 'en') {
    return this.genres.getMovieGenres(lang);
  }

  @Get('tv')
  getTvGenres(@Query('lang') lang = 'en') {
    return this.genres.getTvGenres(lang);
  }
}
