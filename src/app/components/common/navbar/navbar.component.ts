import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  constructor( private authService: AuthService,
               private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.cleanSession();
    this.router.navigate(['login'])
  }

}
