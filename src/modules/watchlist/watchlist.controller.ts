import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { User } from '@common/decorators/current-user.decorator';
import { WatchlistService } from './watchlist.service';
import { WatchlistDto } from './dto/watchlist.dto';

@Controller('watchlist')
export class WatchlistController {
  constructor(private readonly watchlist: WatchlistService) {}

  @Get()
  getWatchlist(@User('id') userId: string) {
    return this.watchlist.getWatchlist(userId);
  }

  @Post()
  toggle(@User('id') userId: string, @Body() dto: WatchlistDto) {
    return this.watchlist.toggle(userId, dto);
  }

  @Delete(':tmdbId')
  remove(
    @User('id') userId: string,
    @Param('tmdbId', ParseIntPipe) tmdbId: number,
    @Query('type') mediaType: string,
  ) {
    return this.watchlist.remove(userId, tmdbId, mediaType);
  }
}
