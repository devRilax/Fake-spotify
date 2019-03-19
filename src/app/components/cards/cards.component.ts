import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgOnChangesFeature } from '@angular/core/src/render3';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit ,OnChanges, OnDestroy {

  @Input() items: any[] = [];
  @Input() isRelease: boolean = false
  @Input() isArtist: boolean = false

  

  constructor(private router : Router) { }

  ngOnChanges(changes: SimpleChanges) {
    let ok = 2;
  }

  ngOnInit() {

  }

  showArtist(artist:any){
    this.router.navigate(['/artist', artist.id])
  }

  ngOnDestroy() {
    this.isRelease = false;
    this.isArtist = false
  }
}
