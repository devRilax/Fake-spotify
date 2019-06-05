import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: []
})
export class ErrorpageComponent implements OnInit {

  
  constructor(private sanitizer:  DomSanitizer) { }

  ngOnInit() {
    //this.imgPath = this.sanitizer.bypassSecurityTrustHtml("page-not-found.png")
  }

  getImgSecurePath(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl('page-not-found.png')
  }

}
