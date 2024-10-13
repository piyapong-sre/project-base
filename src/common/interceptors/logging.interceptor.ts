import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Logger } from '@nestjs/common';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;

    const now = Date.now();

    return next.handle().pipe(
      tap({
        next: () => {
          this.logger.log(`✅ ${method} ${url} - ${Date.now() - now}ms`);
        },
        error: (err) => {
          this.logger.error(`❌ ${method} ${url} - Error: ${err.message}`);
        },
      }),
    );
  }
}
