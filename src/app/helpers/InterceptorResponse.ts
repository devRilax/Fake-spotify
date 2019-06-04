// ./app/interceptores/respuesta.interceptor.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { HttpInterceptor, 
         HttpRequest, HttpHandler, 
         HttpEvent, 
         HttpResponse, 
         HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class InterceptorResponse implements HttpInterceptor {

    constructor(private router : Router){}

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
                            this.router.navigate(['/notfound'])
                            console.log('Página no encontrada!');
                            break;
                        default:
                        console.log('s')
                            break;
                    }
                }
            })
        )
    }
}