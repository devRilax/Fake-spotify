import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {

  readonly UNAUTHORIZED = 401

  constructor( private spotifyService: SpotifyService,
               private message: ToastrService,
               private router : Router ) {  }

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
     }, (error : any) => {
       if(error.status == this.UNAUTHORIZED) {
        this.message.error('Session has expired')
        this.router.navigate(["login"])
       }
     });
  }

}
