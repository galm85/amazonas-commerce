import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Category } from '../../../interfaces/api';
import { UiService } from '../../../services/ui-service';
import { RouterLink } from "@angular/router";
import { CatalogService } from '../../../services/catalog-service';

@Component({
  selector: 'app-catalog-menu',
  imports: [RouterLink],
  templateUrl: './catalog-menu.html',
  styleUrl: './catalog-menu.scss',
})
export class CatalogMenu {
    catalogService = inject(CatalogService);
    uiService = inject(UiService);

    categories = toSignal(this.catalogService.getCategories()
      .pipe(
        map(res=>res.data ?? [])
        ),
      {initialValue:[] as Category[]}
    );

}
