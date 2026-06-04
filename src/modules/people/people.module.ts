import { Module } from '@nestjs/common';
import { TmdbModule } from '@infra/tmdb/tmdb.module';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';

@Module({
  imports: [TmdbModule],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
