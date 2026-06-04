import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Public } from '@common/decorators/public.decorator';
import { CollectionsService } from './collections.service';

@Public()
@Controller('collections')
export class CollectionsController {
  constructor(private readonly collections: CollectionsService) {}

  @Get(':id')
  getCollection(@Param('id', ParseIntPipe) id: number) {
    return this.collections.getCollection(id);
  }
}
