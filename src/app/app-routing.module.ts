import { Routes } from '../../node_modules/@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtitstaComponent } from './components/artitsta/artitsta.component';
import { LayoutComponent } from './components/layout/layout.component';

export const ROUTES:Routes = [
   { 
      path: 'layouts', component: LayoutComponent,
      children:[
         { path: 'home', component: HomeComponent },
         { path: 'search', component: SearchComponent },
         { path: 'artist/:id', component: ArtitstaComponent },
      ]
   }, 
   { path: 'login', component: LoginComponent }, 
   { path: '', pathMatch:'full', redirectTo: 'login' },
   { path: '**', pathMatch:'full', redirectTo: 'login' }
]