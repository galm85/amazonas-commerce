import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {

  isMenuOpen = signal(false);

  toggleMenu():void{
    this.isMenuOpen.update(value => !value);
  }

  closeMenu():void{
    this.isMenuOpen.set(false);
  }
}
