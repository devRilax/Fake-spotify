// ./app/interceptores/respuesta.interceptor.ts
import { Injectable } from '@angular/core';

import { HttpInterceptor, 
         HttpRequest, HttpHandler, 
         HttpEvent, 
         HttpResponse, 
         HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable()
export class InterceptorResponse implements HttpInterceptor {
    intercept( request: HttpRequest<any>, 
               next: HttpHandler) : Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // Si queremos hacer algo con la respuesta, éste es el sitio.
                    console.log('EVENTO HTTP SIN ERRORES')
                    console.log(event);
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    switch (err.status) {
                        case 404:
                            console.log('Página no encontrada!');
                            break;
                        case 401:
                                console.log('Sin autorización!');
                                break;
                        default:
                            console.log('Error respuesta (' + err.status + '): ' + err.statusText);
                            break;
                    }
                }
            })
        );
    }
}