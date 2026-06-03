export default () => ({
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 4000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE: {
    DATABASE_URL:
      process.env.DATABASE_URL ||
      'postgresql://streamly:streamly@localhost:5432/streamly',
  },
});
