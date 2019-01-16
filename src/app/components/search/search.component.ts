import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor( private spotifyService: SpotifyService ) {  }

  private unknownImage: string = "https://vignette.wikia.nocookie.net/marsargo/images/5/52/Unknown.jpg/revision/latest?cb=20170904102656"
  artists: any[] = []
  showLoading: boolean = false;
  
  ngOnInit() {
  }

  onSearch(termine: string) {
    this.showLoading = true
    this.spotifyService.getArtistByTermine(termine) 
     .subscribe( (data: any) => {
       this.artists = data.map( item => {
        item.mainImage = item.images.length > 1 ? item.images[0].url : this.unknownImage
        return item
       })
       this.showLoading = false
     })
  }

}
