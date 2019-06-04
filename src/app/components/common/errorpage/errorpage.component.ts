import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: []
})
export class ErrorpageComponent implements OnInit {

  private imgPath : string = 'assets/img/page-not-found.png'
  
  constructor() { }

  ngOnInit() {
  }

}
