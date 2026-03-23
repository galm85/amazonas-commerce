import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { UiService } from '../../services/ui-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header{


private uiService = inject(UiService);

toggleMenu(){
  this.uiService.toggleMenu();
}

}
