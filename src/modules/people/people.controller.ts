import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { Public } from '@common/decorators/public.decorator';
import { PeopleService } from './people.service';

@Public()
@Controller('people')
export class PeopleController {
  constructor(private readonly people: PeopleService) {}

  @Get('popular')
  getPopular(@Query('page') page = '1') {
    return this.people.getPopular(Number(page));
  }

  @Get(':id')
  getPerson(@Param('id', ParseIntPipe) id: number) {
    return this.people.getPerson(id);
  }
}
