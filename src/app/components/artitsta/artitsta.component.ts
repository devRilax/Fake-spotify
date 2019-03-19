import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artitsta',
  templateUrl: './artitsta.component.html',
  styles: []
})
export class ArtitstaComponent implements OnInit {

   private id: any;
   artist : any;

  constructor( private _activeRoute : ActivatedRoute,
               private _spotifyService : SpotifyService ) { 

    this._activeRoute.params.subscribe( param => {
      this.id = param['id']
    })

    this.getArtist(this.id);
  }

  ngOnInit() {
  }

  getArtist(id :string) {
    this._spotifyService.getArtistById(id)
    .subscribe( (data: any) => {
      this.artist = data;
    })
  }

}
