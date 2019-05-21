import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private readonly api = {
    newReleases: "browse/new-releases",
    getArtist: ''
  }

  private accessToken:string
  
  constructor(private http: HttpClient) { }
  
  buildQuery(query: string) {
    const REQUEST_URL = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.accessToken }`
    }); 

    return this.http.get(REQUEST_URL, { headers })
  }

  setToken() {
    this.token()
    .subscribe( (response: any) => {
      if(response.successful) {
        this.accessToken = response.data.access_token
      }
    })
  }

  token() {
    const TOKEN_URL = 'https://localhost:44335/api/auth';

    return this.http.get(TOKEN_URL)
    .pipe( map( data => data ), catchError(this.handleError) )
  }

  getNewReleases() {
    this.setToken();

    return this.buildQuery(this.api.newReleases)
     .pipe( map( data => data['albums'].items ))
  }

  getArtistByTermine( termine: string ) {
    return this.buildQuery(`search?q=${ termine }&type=artist&limit=15`)
     .pipe( map( data => data['artists'].items ));
  }

  getArtistById( id: string ) {
    return this.buildQuery(`artists/${ id }`)
     .pipe( 
          map( data => 
            data),
            catchError(this.handleError)
      );
  }


  handleError(error : HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log('error y wea')
    } else {
      console.log('error hAcKEND')
    }

    return throwError ('algún error')
  }
}
