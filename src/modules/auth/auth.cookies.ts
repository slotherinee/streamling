import { CookieOptions } from 'express';

const isProd = process.env.NODE_ENV === 'production';
const isSecure = process.env.COOKIE_SECURE === 'true';

export const REFRESH_COOKIE = 'refreshToken';

export const REFRESH_COOKIE_OPTIONS: CookieOptions = {
  httpOnly: true,
  secure: isSecure,
  sameSite: isProd ? 'strict' : 'lax',
  path: '/api/auth',
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export const REFRESH_COOKIE_CLEAR_OPTIONS: CookieOptions = {
  ...REFRESH_COOKIE_OPTIONS,
  maxAge: 0,
};
