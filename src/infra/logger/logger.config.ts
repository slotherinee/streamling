import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModuleAsyncParams } from 'nestjs-pino';

const logDirectory = join(process.cwd(), 'logs');
const appLogFilePath = join(logDirectory, 'app.log');
const errorLogFilePath = join(logDirectory, 'errors.log');

function ensureLogDirectory() {
  mkdirSync(dirname(appLogFilePath), { recursive: true });
}

ensureLogDirectory();

function createRotatingLogTargets() {
  return [
    {
      target: 'pino-roll',
      options: {
        file: appLogFilePath,
        frequency: 'daily',
        mkdir: true,
        limit: {
          count: 1,
        },
      },
    },
    {
      target: 'pino-roll',
      level: 'error',
      options: {
        file: errorLogFilePath,
        frequency: 'daily',
        mkdir: true,
        limit: {
          count: 1,
        },
      },
    },
  ];
}

export const loggerModuleAsyncParams: LoggerModuleAsyncParams = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    const isDev = config.get('NODE_ENV') !== 'production';

    return {
      pinoHttp: {
        level: isDev ? 'debug' : 'info',
        transport: isDev
          ? {
              targets: [
                {
                  target: 'pino-pretty',
                  options: {
                    colorize: true,
                    singleLine: true,
                    translateTime: 'HH:MM:ss',
                    ignore: 'pid,hostname',
                  },
                },
                ...createRotatingLogTargets(),
              ],
            }
          : {
              targets: createRotatingLogTargets(),
            },
        redact: ['req.headers.authorization'],
      },
    };
  },
};
