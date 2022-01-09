import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuOpened = false;

  listTitles = [
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      fullVideo: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia',
      relevance: 98,
      age: 14,
      parts: 2,
      categories: ['Épico', 'Filme de Fantasia', 'Viagem no Espaço']
    },
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      fullVideo: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia',
      relevance: 98,
      age: 14,
      parts: 2,
      categories: ['Épico', 'Filme de Fantasia', 'Viagem no Espaço']
    },
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      fullVideo: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia',
      relevance: 98,
      age: 14,
      parts: 2,
      categories: ['Épico', 'Filme de Fantasia', 'Viagem no Espaço']
    },
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      fullVideo: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia',
      relevance: 98,
      age: 14,
      parts: 2,
      categories: ['Épico', 'Filme de Fantasia', 'Viagem no Espaço']
    }
  ];

  setMenuState(state: boolean): void {
    this.menuOpened = state;
  }

  closeMenu():void {
    this.menuOpened = false;
  }
}
