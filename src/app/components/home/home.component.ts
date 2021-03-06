import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['/home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  currentToken: string;
  showLoading: boolean = false;
  release: boolean = true;

  username: string;
  password: string;

  constructor( private spotifyService: SpotifyService,
               private router : Router ) {}

  ngOnInit() {
    this.getReleases();
  }



  getReleases() {
    this.showLoading = true;
    this.spotifyService.getNewReleases()
     .subscribe( (data: any) => {
        this.newReleases = data.map( item => {
          item.mainImage = item.images[0].url;
          return item;
        });
        this.showLoading = false
     }, (error: any) => {
       if(error.status == 401) {
        this.router.navigate(['/login']);
       }
    });
  }
}
