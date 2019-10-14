import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgOnChangesFeature } from '@angular/core/src/render3';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit ,OnChanges {

  @Input() artist: any;
  @Input() isrelease: boolean = false;
  @Input() isartist: boolean = false;

  constructor(private router : Router) { }

  ngOnChanges(changes: SimpleChanges) {
    let ok = 2;
  }

  ngOnInit() {

  }

  showArtist(artist: any){
    this.router.navigate(['/artist', artist.id]);
  }
}
