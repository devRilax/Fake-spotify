import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } 
from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtitstaComponent } from './components/artitsta/artitsta.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component'


//Helpers
import { InterceptorResponse } from './helpers/interceptorResponse'
import { CanActivateAuthGuard } from 'src/app/helpers/CanActivateAuthGuard';


//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

//Rutas
import { ROUTES } from './app-routing.module';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/common/loading/loading.component';
import { InterceptorRequest } from './helpers/InterceptorRequest';
import { LoginComponent } from './components/auth/login/login.component';

//Scripts
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtitstaComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    CardComponent,
    LoadingComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CanActivateAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorResponse,
      multi: true
    },{
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorRequest,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
