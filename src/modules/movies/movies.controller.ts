import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { Public } from '@common/decorators/public.decorator';
import { MoviesService } from './movies.service';

@Public()
@Controller('movies')
export class MoviesController {
  constructor(private readonly movies: MoviesService) {}

  @Get('popular')
  getPopular(@Query('page') page = '1', @Query('lang') lang = 'en') {
    return this.movies.getList('popular', Number(page), lang);
  }

  @Get('top-rated')
  getTopRated(@Query('page') page = '1', @Query('lang') lang = 'en') {
    return this.movies.getList('top_rated', Number(page), lang);
  }

  @Get('now-playing')
  getNowPlaying(@Query('page') page = '1', @Query('lang') lang = 'en') {
    return this.movies.getList('now_playing', Number(page), lang);
  }

  @Get('upcoming')
  getUpcoming(@Query('page') page = '1', @Query('lang') lang = 'en') {
    return this.movies.getList('upcoming', Number(page), lang);
  }

  @Get(':id')
  getMovie(@Param('id', ParseIntPipe) id: number, @Query('lang') lang = 'en') {
    return this.movies.getMovie(id, lang);
  }
}
