import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TmdbHttpService } from './tmdb.http.service';
import { TmdbService } from './tmdb.service';

@Module({
  imports: [HttpModule.register({ timeout: 10000, maxRedirects: 3 })],
  providers: [TmdbHttpService, TmdbService],
  exports: [TmdbService],
})
export class TmdbModule {}
