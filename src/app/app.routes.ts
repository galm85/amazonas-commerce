import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { CategoryPage } from './pages/category-page/category-page';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';

export const routes: Routes = [
  {path:'',component:Homepage},
  {path:'catalog/:category',component:CategoryPage},
  {path:'signup',component:Register},
  {path:'login',component:Login}
];
