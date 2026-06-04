import { Controller, Get, Query } from '@nestjs/common';
import { Public } from '@common/decorators/public.decorator';
import { TrendingService } from './trending.service';
import type {
  TrendingType,
  TimeWindow,
} from './interfaces/trending.interfaces';

@Public()
@Controller('trending')
export class TrendingController {
  constructor(private readonly trending: TrendingService) {}

  @Get()
  getTrending(
    @Query('type') type: TrendingType = 'all',
    @Query('window') window: TimeWindow = 'day',
  ) {
    return this.trending.getTrending(type, window);
  }
}
