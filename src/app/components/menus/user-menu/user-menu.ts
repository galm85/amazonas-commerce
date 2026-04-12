import { Component, inject } from '@angular/core';
import { UiService } from '../../../services/ui-service';
import { RouterLink } from "@angular/router";
import { User } from '../../../interfaces/api';
import { ApiService } from '../../../services/apiService';

@Component({
  selector: 'app-user-menu',
  imports: [RouterLink],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.scss',
})
export class UserMenu {

  uiService = inject(UiService);
  apiService = inject(ApiService);

  user = this.apiService.getUser();


  logout():void{
    this.apiService.logoutUser();
  }


}
