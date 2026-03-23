import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/apiService';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Category } from '../../../interfaces/api';

@Component({
  selector: 'app-catalog-menu',
  imports: [],
  templateUrl: './catalog-menu.html',
  styleUrl: './catalog-menu.scss',
})
export class CatalogMenu {
    apiService = inject(ApiService);

    categories = toSignal(this.apiService.getCategories()
      .pipe(
        map(res=>res.data ?? [])
        ),
      {initialValue:[] as Category[]}
    );

}
