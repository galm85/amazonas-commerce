import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { UiService } from '../../services/ui-service';
import { UserMenu } from '../menus/user-menu/user-menu';

@Component({
  selector: 'app-header',
  imports: [RouterLink,MatIconModule,UserMenu],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header{


protected uiService = inject(UiService);

toggleMenu(){
  this.uiService.toggleMenu();
}

toggleUserMenu(){
  this.uiService.toggleUserMenu();
}


}
