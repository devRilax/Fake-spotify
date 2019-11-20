import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;


  constructor(private message: ToastrService,
              private authService: AuthService,
              private router : Router)  { }

  ngOnInit() {
  }

  auth() {
    this.authService.authenticate(this.username, this.password)
      .subscribe( ( response: any ) => {
        if(response.successful) {
          this.authService.setTokenAuthentication(response.data.access_token)
          this.router.navigate(["layouts/home"])
        } else {
          this.message.error(response.message, "Autenticación fallida")
        }
      },
      ( error : any) => {
        console.log(error)
      } )
  }

}
