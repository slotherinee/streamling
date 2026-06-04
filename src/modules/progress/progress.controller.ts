import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { User } from '@common/decorators/current-user.decorator';
import { ProgressService } from './progress.service';
import { ProgressDto } from './dto/progress.dto';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progress: ProgressService) {}

  @Get()
  getAll(@User('id') userId: string) {
    return this.progress.getAll(userId);
  }

  @Get(':tmdbId')
  getOne(
    @User('id') userId: string,
    @Param('tmdbId', ParseIntPipe) tmdbId: number,
    @Query('type') mediaType: string,
  ) {
    return this.progress.getOne(userId, tmdbId, mediaType);
  }

  @Post()
  upsert(@User('id') userId: string, @Body() dto: ProgressDto) {
    return this.progress.upsert(userId, dto);
  }
}
