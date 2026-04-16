import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {

  isMenuOpen = signal(false);
  isUserMenuOpen = signal(false);
  isLoading =  signal(false);

  toggleMenu():void{
    this.isMenuOpen.update(value => !value);
  }

  closeMenu():void{
    this.isMenuOpen.set(false);
  }

  toggleUserMenu():void{
    this.isUserMenuOpen.update(value => !value);
  }

  closeUserMenu():void{
    this.isUserMenuOpen.set(false);
  }

  setLoading(value:boolean){
    this.isLoading.set(value);
  }
}
