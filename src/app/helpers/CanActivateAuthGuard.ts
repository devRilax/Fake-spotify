import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { ToastrService, Toast } from 'ngx-toastr';




@Injectable()
export class CanActivateAuthGuard implements CanActivate {
    constructor( private authService: AuthService,
                 private message: ToastrService,
                 private router: Router){}

    canActivate(){
        let userNotLogged = (this.authService.getToken() == null)
        if(userNotLogged) {
            this.message.warning('Usuario no autenticado')
            this.router.navigate(['login'])
            return false
        }   
        return true
    }
}