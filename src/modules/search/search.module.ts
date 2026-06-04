import { Module } from '@nestjs/common';
import { TmdbModule } from '@infra/tmdb/tmdb.module';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

@Module({
  imports: [TmdbModule],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
