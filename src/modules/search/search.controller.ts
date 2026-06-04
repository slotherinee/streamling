import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { Public } from '@common/decorators/public.decorator';
import { SearchService } from './search.service';
import type { SearchType } from './interfaces/search.interfaces';

@Public()
@Controller('search')
export class SearchController {
  constructor(private readonly search: SearchService) {}

  @Get()
  doSearch(
    @Query('q') q: string,
    @Query('type') type: SearchType = 'multi',
    @Query('page') page = '1',
  ) {
    if (!q?.trim()) {
      throw new BadRequestException('Query param "q" is required');
    }
    return this.search.search(q.trim(), type, Number(page));
  }
}
