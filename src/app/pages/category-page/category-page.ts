import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/apiService';
import { switchMap,map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../../interfaces/api';

@Component({
  selector: 'app-category-page',
  imports: [],
  templateUrl: './category-page.html',
  styleUrl: './category-page.scss',
})
export class CategoryPage {

  route = inject(ActivatedRoute);
  apiService = inject(ApiService);

  category = toSignal(this.route.paramMap.pipe(
    map(params => params.get('category'))
  ),{initialValue:null});

  products = toSignal(this.route.paramMap
    .pipe(
      map(param => param.get('category')),
      switchMap(category => {
        if(!category) return[];
        return this.apiService.getProductsByCategory(category);
      }),
      map(res=>res?.data.products ?? [])
    ),
    {initialValue:[]}
  )
}
