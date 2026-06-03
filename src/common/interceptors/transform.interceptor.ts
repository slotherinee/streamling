import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiOkResponse } from '@common/types/api-response.type';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<
  T,
  ApiOkResponse<T>
> {
  intercept(
    _ctx: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<ApiOkResponse<T>> {
    return next.handle().pipe(map((data) => ({ status: 'ok', data })));
  }
}
