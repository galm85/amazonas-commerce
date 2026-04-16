import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../../interfaces/api';
import { CatalogService } from '../../services/catalog-service';

@Component({
  selector: 'app-category-page',
  imports: [],
  templateUrl: './category-page.html',
  styleUrl: './category-page.scss',
})
export class CategoryPage {

  route = inject(ActivatedRoute);
  catalogService = inject(CatalogService);

  category = toSignal(this.route.paramMap.pipe(
    map(params => params.get('category'))
  ),{initialValue:null});

  products = toSignal(this.route.paramMap
    .pipe(
      map(param => param.get('category')),
      switchMap(category => {
        if(!category) return[];
        return this.catalogService.getProductsByCategory(category);
      }),
      map(res=>res?.data.products ?? [])
    ),
    {initialValue:[]}
  )
}
