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
      trailer: 'assets/videos/fugindo_do_amor_trailer.mp4',
      fullVideo: 'assets/videos/fugindo_do_amor_trailer.mp4',
      cover: 'assets/images/fugindo_do_amor.jpg',
      name: 'Fugindo do Amor',
      relevance: 98,
      age: 12,
      parts: 0,
      categories: ['Comédias românticas', 'Comédia', 'Filmes românticos']
    },
    {
      trailer: 'assets/videos/a_barraca_do_beijo_3_trailer.mp4',
      fullVideo: 'assets/videos/a_barraca_do_beijo_3_trailer.mp4',
      cover: 'assets/images/a_barraca_do_beijo_3.jpg',
      name: 'A Barraca do beijo 3',
      relevance: 97,
      age: 14,
      parts: 0,
      categories: ['Comédias românticas', 'Comédia', 'Filmes românticos']
    },
    {
      trailer: 'assets/videos/fugindo_do_amor_trailer.mp4',
      fullVideo: 'assets/videos/fugindo_do_amor_trailer.mp4',
      cover: 'assets/images/fugindo_do_amor.jpg',
      name: 'Fugindo do Amor',
      relevance: 98,
      age: 12,
      parts: 0,
      categories: ['Comédias românticas', 'Comédia', 'Filmes românticos']
    },
    {
      trailer: 'assets/videos/a_barraca_do_beijo_3_trailer.mp4',
      fullVideo: 'assets/videos/a_barraca_do_beijo_3_trailer.mp4',
      cover: 'assets/images/a_barraca_do_beijo_3.jpg',
      name: 'A Barraca do beijo 3',
      relevance: 97,
      age: 14,
      parts: 0,
      categories: ['Comédias românticas', 'Comédia', 'Filmes românticos']
    },
    {
      trailer: 'assets/videos/fugindo_do_amor_trailer.mp4',
      fullVideo: 'assets/videos/fugindo_do_amor_trailer.mp4',
      cover: 'assets/images/fugindo_do_amor.jpg',
      name: 'Fugindo do Amor',
      relevance: 98,
      age: 12,
      parts: 0,
      categories: ['Comédias românticas', 'Comédia', 'Filmes românticos']
    },
    {
      trailer: 'assets/videos/a_barraca_do_beijo_3_trailer.mp4',
      fullVideo: 'assets/videos/a_barraca_do_beijo_3_trailer.mp4',
      cover: 'assets/images/a_barraca_do_beijo_3.jpg',
      name: 'A Barraca do beijo 3',
      relevance: 97,
      age: 14,
      parts: 0,
      categories: ['Comédias românticas', 'Comédia', 'Filmes românticos']
    },
    {
      trailer: 'assets/videos/fugindo_do_amor_trailer.mp4',
      fullVideo: 'assets/videos/fugindo_do_amor_trailer.mp4',
      cover: 'assets/images/fugindo_do_amor.jpg',
      name: 'Fugindo do Amor',
      relevance: 98,
      age: 12,
      parts: 0,
      categories: ['Comédias românticas', 'Comédia', 'Filmes românticos']
    },
    {
      trailer: 'assets/videos/a_barraca_do_beijo_3_trailer.mp4',
      fullVideo: 'assets/videos/a_barraca_do_beijo_3_trailer.mp4',
      cover: 'assets/images/a_barraca_do_beijo_3.jpg',
      name: 'A Barraca do beijo 3',
      relevance: 97,
      age: 14,
      parts: 0,
      categories: ['Comédias românticas', 'Comédia', 'Filmes românticos']
    },
    {
      trailer: 'assets/videos/fugindo_do_amor_trailer.mp4',
      fullVideo: 'assets/videos/fugindo_do_amor_trailer.mp4',
      cover: 'assets/images/fugindo_do_amor.jpg',
      name: 'Fugindo do Amor',
      relevance: 98,
      age: 12,
      parts: 0,
      categories: ['Comédias românticas', 'Comédia', 'Filmes românticos']
    },
    {
      trailer: 'assets/videos/a_barraca_do_beijo_3_trailer.mp4',
      fullVideo: 'assets/videos/a_barraca_do_beijo_3_trailer.mp4',
      cover: 'assets/images/a_barraca_do_beijo_3.jpg',
      name: 'A Barraca do beijo 3',
      relevance: 97,
      age: 14,
      parts: 0,
      categories: ['Comédias românticas', 'Comédia', 'Filmes românticos']
    }
  ];

  setMenuState(state: boolean): void {
    this.menuOpened = state;
  }

  closeMenu():void {
    this.menuOpened = false;
  }
}
