import { Routes } from '../../node_modules/@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtitstaComponent } from './components/artitsta/artitsta.component';

export const ROUTES:Routes = [
   { path: 'login', component: LoginComponent }
   { path: 'home', component: HomeComponent },
   { path: 'search', component: SearchComponent },
   { path: 'artist/:id', component: ArtitstaComponent },
   { path: '', pathMatch:'full', redirectTo: 'home' },
   { path: '**', pathMatch:'full', redirectTo: 'home' }
]