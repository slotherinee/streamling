import { Module } from '@nestjs/common';
import { TmdbModule } from '@infra/tmdb/tmdb.module';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  imports: [TmdbModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
