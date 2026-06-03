import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class TmdbHttpService {
  private readonly logger = new Logger(TmdbHttpService.name);
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
  ) {
    this.apiKey = this.config.getOrThrow<string>('TMDB.API_KEY');
    this.baseUrl = this.config.get<string>(
      'TMDB.BASE_URL',
      'https://api.themoviedb.org/3',
    );
  }

  async get<T>(
    endpoint: string,
    params: Record<string, unknown> = {},
    ttlSeconds = 300,
  ): Promise<T> {
    const cacheKey = `tmdb:${endpoint}:${JSON.stringify(params)}`;

    const cached = await this.cache.get<T>(cacheKey);
    if (cached) return cached;

    const url = `${this.baseUrl}${endpoint}`;
    try {
      const response = await firstValueFrom(
        this.http.get<T>(url, {
          params: { api_key: this.apiKey, ...params },
        }),
      );
      await this.cache.set(cacheKey, response.data, ttlSeconds * 1000);
      return response.data;
    } catch (err) {
      const axiosErr = err as AxiosError;
      if (axiosErr.response?.status === 404) {
        throw new NotFoundException(`TMDB resource not found: ${endpoint}`);
      }
      this.logger.error(`TMDB request failed: ${endpoint}`, axiosErr.message);
      throw new InternalServerErrorException('Failed to fetch data from TMDB');
    }
  }
}
