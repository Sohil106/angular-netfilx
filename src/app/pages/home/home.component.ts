import { Component, inject } from '@angular/core';
import { BannerComponent } from '../../shared/components/home/banner/banner.component';
import { MovieCarouselComponent } from '../../shared/components/home/movie-carousel/movie-carousel.component';
import { CardsService } from '../../core/services/cards.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, MovieCarouselComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cardService = inject(CardsService);
  popularMovies: any[] = [];
  likedMovies: any[] = [];
  constructor() {
    this.popularMovies = this.cardService.cards_data;
    this.cardService.likedMovie$.subscribe((likedMovie: any) => {
      const index = this.likedMovies.findIndex(
        (movie) => movie.id === likedMovie.id
      );
      if (index > -1) {
        this.likedMovies.splice(index, 1);
      } else {
        this.likedMovies.push(likedMovie);
      }
      console.log(this.likedMovies);
    });
  }
}
