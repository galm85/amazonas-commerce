import { Component, inject } from '@angular/core';
import { UiService } from '../../../services/ui-service';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-user-menu',
  imports: [RouterLink],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.scss',
})
export class UserMenu {

  uiService = inject(UiService);
  authService = inject(AuthService);

  user = this.authService.getUser();


  logout():void{
    this.authService.logoutUser();
  }


}
