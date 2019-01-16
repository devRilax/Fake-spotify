import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases:any[] = []

  constructor( private spotifyService: SpotifyService ) { 

    this.spotifyService.getNewReleases()
     .subscribe( (data: any) => {

        this.newReleases = data.map( item => {
          item.mainImage = item.images[0].url
          return item
        })
        console.log(this.newReleases)
     })
  }

  ngOnInit() {
  }

}
