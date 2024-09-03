import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherPlay } from '@ng-icons/feather-icons';
import Swiper from 'swiper';
import { DescriptionPipe } from '../../../pipes/description.pipe';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { CardsService } from '../../../../core/services/cards.service';

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [FormsModule, NgIconComponent, CommonModule, DescriptionPipe],
  providers: [provideIcons({ featherPlay })],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.scss',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(600, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MovieCarouselComponent implements OnInit {
  @Input() videoContents: any[] = [];
  @Input() title: string = '';
  @ViewChild('sliderContainer', { static: true }) sliderContainer!: ElementRef;
  selectedContent: string | null = null;
  selectedMovie: any = '';

  constructor(private cardService: CardsService) {}

  ngOnInit(): void {
    this.sliderContainer.nativeElement.addEventListener(
      'wheel',
      (event: WheelEvent) => {
        event.preventDefault();
        this.sliderContainer.nativeElement.scrollLeft += event.deltaY;
      }
    );
  }

  getSelectedMovie(movie: any) {
    this.cardService.bannerMovie$.next(movie);
  }
  // ngAfterViewInit(): void {
  //   this.initSwiper();
  // }

  // private initSwiper() {
  //   return new Swiper(this.swiperContainer.nativeElement, {
  //     slidesPerView: 3,
  //     slidesPerGroup: 2,
  //     centeredSlides: true,
  //     loop: true,
  //     breakpoints: {
  //       600: {
  //         slidesPerView: 2,
  //         slidesPerGroup: 2,
  //         spaceBetween: 5,
  //         centeredSlides: true,
  //       },
  //       900: {
  //         slidesPerView: 3,
  //         slidesPerGroup: 3,
  //         spaceBetween: 5,
  //         centeredSlides: true,
  //       },
  //       1200: {
  //         slidesPerView: 4,
  //         slidesPerGroup: 4,
  //         spaceBetween: 5,
  //         centeredSlides: false,
  //       },
  //       1500: {
  //         slidesPerView: 5,
  //         slidesPerGroup: 5,
  //         spaceBetween: 5,
  //         centeredSlides: false,
  //       },
  //       1800: {
  //         slidesPerView: 5,
  //         slidesPerGroup: 6,
  //         spaceBetween: 5,
  //         centeredSlides: false,
  //       },
  //     },
  //   });
  // }

  setHoverMovie(movie: any) {
    this.selectedContent = movie.name;
  }
  cleatHoverMovie() {
    this.selectedContent = null;
  }
}
