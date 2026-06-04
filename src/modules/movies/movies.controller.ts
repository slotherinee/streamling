import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { Public } from '@common/decorators/public.decorator';
import { MoviesService } from './movies.service';

@Public()
@Controller('movies')
export class MoviesController {
  constructor(private readonly movies: MoviesService) {}

  @Get('popular')
  getPopular(@Query('page') page = '1') {
    return this.movies.getList('popular', Number(page));
  }

  @Get('top-rated')
  getTopRated(@Query('page') page = '1') {
    return this.movies.getList('top_rated', Number(page));
  }

  @Get('now-playing')
  getNowPlaying(@Query('page') page = '1') {
    return this.movies.getList('now_playing', Number(page));
  }

  @Get('upcoming')
  getUpcoming(@Query('page') page = '1') {
    return this.movies.getList('upcoming', Number(page));
  }

  @Get(':id')
  getMovie(@Param('id', ParseIntPipe) id: number) {
    return this.movies.getMovie(id);
  }
}
