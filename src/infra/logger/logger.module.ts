import { Module } from '@nestjs/common';
import { LoggerModule as NestLoggerModule } from 'nestjs-pino';
import { loggerModuleAsyncParams } from './logger.config';

@Module({
  imports: [NestLoggerModule.forRootAsync(loggerModuleAsyncParams)],
  exports: [NestLoggerModule],
})
export class AppLoggerModule {}
