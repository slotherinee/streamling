import { Controller, Get, Query } from '@nestjs/common';
import { Public } from '@common/decorators/public.decorator';
import { DiscoverService } from './discover.service';
import { DiscoverQueryDto } from './dto/discover-query.dto';

@Public()
@Controller('discover')
export class DiscoverController {
  constructor(private readonly discover: DiscoverService) {}

  @Get('movies')
  discoverMovies(@Query() query: DiscoverQueryDto, @Query('lang') lang = 'en') {
    return this.discover.discoverMovies(query, lang);
  }

  @Get('tv')
  discoverTv(@Query() query: DiscoverQueryDto, @Query('lang') lang = 'en') {
    return this.discover.discoverTv(query, lang);
  }
}
