import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {

  constructor( private spotifyService: SpotifyService ) {  }

  artists: any[] = [];
  showLoading: boolean = false;

  ngOnInit() {
  }

  onSearch(termine: string) {
    this.showLoading = true;
    this.spotifyService.getArtistByTermine(termine)
     .subscribe( (data: any) => {
       this.artists = data;
       this.showLoading = false;
     });
  }

}
