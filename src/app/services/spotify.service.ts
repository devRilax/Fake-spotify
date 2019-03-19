import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private readonly api = {
    newReleases: "browse/new-releases",
    getArtist: ''
  }
  
  constructor(private http: HttpClient) { }

  buildQuery(query: string) {
    const requestURL = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBUBT2bPp_5dGCzNGLMah75mkgdwJk2PQnlagk1NOJwP5-y1ro2xINLhZ-FR5PSWSSOCr24CmdMrK1NU3o'
    }); 

    return this.http.get(requestURL, { headers })
  }

  getNewReleases() {
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
            data)
      );
  }
}
