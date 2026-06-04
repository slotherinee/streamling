import { Injectable } from '@nestjs/common';
import { TmdbService } from '@infra/tmdb/tmdb.service';
import { normalizePerson, normalizePersonCard } from './people.normalizer';
import type { Person, PersonCard } from './interfaces/people.interfaces';

@Injectable()
export class PeopleService {
  constructor(private readonly tmdb: TmdbService) {}

  async getPerson(id: number, lang = 'en'): Promise<Person> {
    const raw = await this.tmdb.getPerson(id, lang);
    return normalizePerson(raw);
  }

  async getPopular(
    page = 1,
    lang = 'en',
  ): Promise<{ page: number; totalPages: number; results: PersonCard[] }> {
    const raw: any = await this.tmdb.getPopularPeople(page, lang);
    return {
      page: raw.page,
      totalPages: raw.total_pages,
      results: raw.results.map(normalizePersonCard),
    };
  }
}
