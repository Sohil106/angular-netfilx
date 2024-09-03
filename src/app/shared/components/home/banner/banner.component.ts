import { Component, inject, Input } from '@angular/core';
import { CardsService } from '../../../../core/services/cards.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherInfo, featherPlay } from '@ng-icons/feather-icons';
import { DescriptionPipe } from '../../../pipes/description.pipe';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgIconComponent, DescriptionPipe],
  providers: [provideIcons({ featherPlay, featherInfo })],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  cardService = inject(CardsService);

  cards = this.cardService.cards_data;
  bannerMovie: any = {
    id: this.cards[14].id,
    image: this.cards[14].image,
    title: this.cards[14].title,
    name: this.cards[14].name,
    video: this.cards[14].video,
    overview: this.cards[14].overview,
  };
  constructor() {
    this.cardService.bannerMovie$.subscribe((movie: any) => {
      this.bannerMovie = movie;
    });
  }
}
