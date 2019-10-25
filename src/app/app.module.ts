import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } 
from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtitstaComponent } from './components/artitsta/artitsta.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';

//Helpers
import { InterceptorResponse } from './helpers/interceptorResponse'

//Rutas
import { ROUTES } from './app-routing.module';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/common/loading/loading.component';
import { InterceptorRequest } from './helpers/InterceptorRequest';
import { LoginComponent } from './components/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtitstaComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
    LoadingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [
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
