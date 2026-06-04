import { Module } from '@nestjs/common';
import { TmdbModule } from '@infra/tmdb/tmdb.module';
import { TvController } from './tv.controller';
import { TvService } from './tv.service';

@Module({
  imports: [TmdbModule],
  controllers: [TvController],
  providers: [TvService],
})
export class TvModule {}
