import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';

type UserRecord = { [key: string]: unknown } | null;

export const User = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx
      .switchToHttp()
      .getRequest<Request & { user?: UserRecord }>();

    const user = request.user ?? null;

    if (data) {
      return user ? user[data] : undefined;
    }

    return user;
  },
);
