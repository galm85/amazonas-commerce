import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { CategoryPage } from './pages/category-page/category-page';

export const routes: Routes = [
  {path:'',component:Homepage},
  {path:'catalog/:category',component:CategoryPage}
];
