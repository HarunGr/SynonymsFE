import { Routes } from '@angular/router';
import { Search } from './search/search';
import { Login } from './login/login';
import { Register } from './register/register';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'search', component: Search, canActivate: [AuthGuard] }
];