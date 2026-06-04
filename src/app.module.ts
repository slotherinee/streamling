import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import configuration from '@infra/config/configuration';
import { PrismaModule } from '@infra/database/prisma.module';
import { AppLoggerModule } from '@infra/logger/logger.module';
import { AppCacheModule } from '@infra/cache/cache.module';
import { TmdbModule } from '@infra/tmdb/tmdb.module';
import { HealthModule } from '@modules/health/health.module';
import { AuthModule } from '@modules/auth/auth.module';
import { UsersModule } from '@modules/users/users.module';
import { MoviesModule } from '@modules/movies/movies.module';
import { TvModule } from '@modules/tv/tv.module';
import { HttpExceptionFilter } from '@common/filters/http-exception.filter';
import { TransformInterceptor } from '@common/interceptors/transform.interceptor';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    AppLoggerModule,
    PrismaModule,
    AppCacheModule,
    TmdbModule,
    HealthModule,
    AuthModule,
    UsersModule,
    MoviesModule,
    TvModule,
  ],
  controllers: [],
  providers: [
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    { provide: APP_GUARD, useClass: JwtAuthGuard },
  ],
})
export class AppModule {}
