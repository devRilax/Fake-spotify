import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases:any[] = []
  showLoading:boolean = false
  release: boolean = true

  constructor( private spotifyService: SpotifyService ) { 

    this.showLoading = true
    this.spotifyService.getNewReleases()
     .subscribe( (data: any) => {
        this.newReleases = data.map( item => {
          item.mainImage = item.images[0].url
          return item
        })
        this.showLoading = false
        console.log(this.newReleases)
     })
  }

  ngOnInit() {
  }



}
