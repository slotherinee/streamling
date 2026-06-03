export default () => ({
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 4000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE: {
    DATABASE_URL:
      process.env.DATABASE_URL ||
      'postgresql://streamly:streamly@localhost:5432/streamly',
  },
  JWT: {
    ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || 'access-secret-change-me',
    REFRESH_SECRET:
      process.env.JWT_REFRESH_SECRET || 'refresh-secret-change-me',
    ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
    REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  },
});
