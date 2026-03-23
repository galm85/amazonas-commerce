import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { CatalogMenu } from "./components/menus/catalog-menu/catalog-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CatalogMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('amazonas');
}
