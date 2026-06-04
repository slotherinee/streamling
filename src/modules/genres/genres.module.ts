import { Module } from '@nestjs/common';
import { TmdbModule } from '@infra/tmdb/tmdb.module';
import { GenresController } from './genres.controller';
import { GenresService } from './genres.service';

@Module({
  imports: [TmdbModule],
  controllers: [GenresController],
  providers: [GenresService],
  exports: [GenresService],
})
export class GenresModule {}
