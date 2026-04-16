import { Component, inject } from '@angular/core';
import { UiService } from '../../services/ui-service';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class Loader {

  uiService = inject(UiService);

  isLoading = this.uiService.isLoading;
}
