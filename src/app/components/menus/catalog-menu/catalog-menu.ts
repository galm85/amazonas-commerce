import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/apiService';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Category } from '../../../interfaces/api';
import { UiService } from '../../../services/ui-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-catalog-menu',
  imports: [RouterLink],
  templateUrl: './catalog-menu.html',
  styleUrl: './catalog-menu.scss',
})
export class CatalogMenu {
    protected apiService = inject(ApiService);
    uiService = inject(UiService);

    categories = toSignal(this.apiService.getCategories()
      .pipe(
        map(res=>res.data ?? [])
        ),
      {initialValue:[] as Category[]}
    );

}
