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
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/common/loading/loading.component';
import { InterceptorRequest } from './helpers/interceptorRequest';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtitstaComponent,
    NavbarComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorRequest,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorResponse,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
