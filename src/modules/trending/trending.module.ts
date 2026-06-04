import { Module } from '@nestjs/common';
import { TmdbModule } from '@infra/tmdb/tmdb.module';
import { TrendingController } from './trending.controller';
import { TrendingService } from './trending.service';

@Module({
  imports: [TmdbModule],
  controllers: [TrendingController],
  providers: [TrendingService],
})
export class TrendingModule {}
