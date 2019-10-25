import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
 
@Injectable()
export class InterceptorRequest implements HttpInterceptor {

  constructor(public authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let accesToken = this.authService.getToken();

    request = request.clone({
      setHeaders:{
        Authorization: 'Bearer BQCcVhWULwbKy5wtKUY5IeFnBwSLPoYLtdbadzPVopOGyCmejANgDwktAnWNbRbGXGDW3F2yMjWRyqmNcu0'
      }
    });
    return next.handle(request)

    /* if(accesToken !== null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accesToken}`
        }
      });

      return next.handle(request);
    } else {
      request = request.clone({})
      return next.handle(request)
    } */
  }
}