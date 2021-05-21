import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../_common/noop-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];