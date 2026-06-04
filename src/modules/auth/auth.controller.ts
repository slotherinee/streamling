import { Body, Controller, HttpCode, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { Public } from '@common/decorators/public.decorator';
import { RegisterDto, LoginDto } from './dto/index.dto';
import { REFRESH_COOKIE, REFRESH_COOKIE_OPTIONS, REFRESH_COOKIE_CLEAR_OPTIONS } from './auth.cookies';

@Public()
@Controller('auth')
@UseGuards(ThrottlerGuard)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @Throttle({ default: { ttl: 60000, limit: 10 } })
  async register(@Body() dto: RegisterDto, @Res({ passthrough: true }) res: Response) {
    const { accessToken, refreshToken } = await this.authService.register(dto);
    res.cookie(REFRESH_COOKIE, refreshToken, REFRESH_COOKIE_OPTIONS);
    return { accessToken };
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @Throttle({ default: { ttl: 60000, limit: 10 } })
  async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const { accessToken, refreshToken } = await this.authService.login(dto);
    res.cookie(REFRESH_COOKIE, refreshToken, REFRESH_COOKIE_OPTIONS);
    return { accessToken };
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @Throttle({ default: { ttl: 60000, limit: 20 } })
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const { accessToken, refreshToken } = await this.authService.refresh(req.cookies?.[REFRESH_COOKIE] ?? '');
    res.cookie(REFRESH_COOKIE, refreshToken, REFRESH_COOKIE_OPTIONS);
    return { accessToken };
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    await this.authService.logout(req.cookies?.[REFRESH_COOKIE]);
    res.clearCookie(REFRESH_COOKIE, REFRESH_COOKIE_CLEAR_OPTIONS);
    return { ok: true };
  }
}
