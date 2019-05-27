import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
 
@Injectable()
export class InterceptorRequest implements HttpInterceptor {

  constructor(public authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modificamos la URL de la petición para solicitar únicamente 10 elementos.

    let accesToken = this.authService.getToken();

    if(accesToken !== null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accesToken}`
        }
      });

      return next.handle(request);
    } else {
      request = request.clone({})
      return next.handle(request)
    }
  }
}