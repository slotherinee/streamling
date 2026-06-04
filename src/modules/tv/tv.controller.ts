import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { Public } from '@common/decorators/public.decorator';
import { TvService } from './tv.service';

@Public()
@Controller('tv')
export class TvController {
  constructor(private readonly tv: TvService) {}

  @Get('popular')
  getPopular(@Query('page') page = '1', @Query('lang') lang = 'en') {
    return this.tv.getList('popular', Number(page), lang);
  }

  @Get('top-rated')
  getTopRated(@Query('page') page = '1', @Query('lang') lang = 'en') {
    return this.tv.getList('top_rated', Number(page), lang);
  }

  @Get('airing-today')
  getAiringToday(@Query('page') page = '1', @Query('lang') lang = 'en') {
    return this.tv.getList('airing_today', Number(page), lang);
  }

  @Get('on-the-air')
  getOnTheAir(@Query('page') page = '1', @Query('lang') lang = 'en') {
    return this.tv.getList('on_the_air', Number(page), lang);
  }

  @Get(':id/season/:seasonNumber')
  getSeason(
    @Param('id', ParseIntPipe) id: number,
    @Param('seasonNumber', ParseIntPipe) seasonNumber: number,
    @Query('lang') lang = 'en',
  ) {
    return this.tv.getSeason(id, seasonNumber, lang);
  }

  @Get(':id')
  getTv(@Param('id', ParseIntPipe) id: number, @Query('lang') lang = 'en') {
    return this.tv.getTv(id, lang);
  }
}
