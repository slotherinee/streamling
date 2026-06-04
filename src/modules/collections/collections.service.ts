import { Injectable } from '@nestjs/common';
import { TmdbService } from '@infra/tmdb/tmdb.service';
import { normalizeCollection } from './collections.normalizer';
import type { Collection } from './interfaces/collections.interfaces';

@Injectable()
export class CollectionsService {
  constructor(private readonly tmdb: TmdbService) {}

  async getCollection(id: number): Promise<Collection> {
    const raw = await this.tmdb.getCollection(id);
    return normalizeCollection(raw);
  }
}
