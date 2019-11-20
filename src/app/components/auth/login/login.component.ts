import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  login: Object = {
    username: null,
    password: null
  }

  constructor(private message: ToastrService,
              private authService: AuthService,
              private router : Router)  { }
  ngOnInit() {
  }

  auth( form : NgForm) {

    this.authService.authenticate(this.username, this.password)
      .subscribe( ( response: any ) => {
        if(response.successful) {
          this.authService.setTokenAuthentication(response.data.access_token)
          this.router.navigate(["/home"])
        } else {
          this.message.error("Authentication failed!", response.message)
        }
      },
      ( error : any) => {
        console.log(error)
      } )
  }

}
