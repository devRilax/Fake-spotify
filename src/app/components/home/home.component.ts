import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases:any[] = []
  currentToken:string
  showLoading:boolean = false
  release: boolean = true

  constructor( private spotifyService: SpotifyService ) { 

    
  }

  ngOnInit() {
    this.login()
  }

  login() {
    this.spotifyService.setToken()
    .subscribe( (data: any) => {
      sessionStorage.setItem('ACCESS_TOKEN', data.access_token)
      this.getReleases()
    })
  }

  getReleases() {
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
}
