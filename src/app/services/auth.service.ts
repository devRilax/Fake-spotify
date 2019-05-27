import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly api = {
        newReleases: "browse/new-releases",
        getArtist: ''
    }

    private accessToken: string

    constructor(private http: HttpClient) {}

  
    
  authenticate() {
    const TOKEN_URL = 'https://localhost:44335/api/auth';

    return this.http.get(TOKEN_URL)
    .pipe( map( data => data ), catchError(this.handleError) )
  }

  setTokenAuthentication(tkn: string) {
      this.accessToken = tkn
      localStorage.setItem('authToken', this.accessToken)
  }

  getToken() {
      return localStorage.getItem('authToken')
  }

  handleError(error : HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log('error y wea')
    } else {
      console.log('error hackend')
    }

    return throwError ('algún error')
  }


}