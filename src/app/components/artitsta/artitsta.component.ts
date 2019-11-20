import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artitsta',
  templateUrl: './artitsta.component.html',
  styleUrls: ['./artista.css']
})
export class ArtitstaComponent implements OnInit {

   private id: string;
   artist : any;
   topTracks: any[];

  constructor( private _activeRoute : ActivatedRoute,
               private _spotifyService : SpotifyService ) {

    this._activeRoute.params.subscribe( param => {
      this.id = param['id'];
    });

    this.getArtist(this.id);
  }

  ngOnInit() {
  }

  getArtist(id: string) {
    this._spotifyService.getArtistById(id)
    .subscribe( (data: any) => {
      this.artist = data;
      this.getTopTracks();
    }, (error: any) => {
      console.log(error);
    });
  }

  getTopTracks() {
    this._spotifyService.getTopTracksByArtistId(this.id)
     .subscribe( (data: any) => {
      this.topTracks = data.tracks
     }, (error : any) => {
      console.log(error)
     });
  }

  getTrackUrl(trackId: any) {
    return `https://open.spotify.com/embed/track/${trackId}`
  }

}
