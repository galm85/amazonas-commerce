import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { CategoryPage } from './pages/category-page/category-page';
import { Register } from './pages/register/register';

export const routes: Routes = [
  {path:'',component:Homepage},
  {path:'catalog/:category',component:CategoryPage},
  {path:'signup',component:Register}
];
