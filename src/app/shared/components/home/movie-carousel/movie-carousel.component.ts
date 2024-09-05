import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherPlay } from '@ng-icons/feather-icons';
import { DescriptionPipe } from '../../../pipes/description.pipe';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { CardsService } from '../../../../core/services/cards.service';

import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [
    FormsModule,
    NgIconComponent,
    CommonModule,
    DescriptionPipe,
    MatButtonModule,
  ],
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
  selectedMovieData: any = {};

  dialogDimensions: { maxWidth: string; maxHeight: string } = {
    maxWidth: '60vw',
    maxHeight: '90vh',
  };

  constructor(private cardService: CardsService) {}

  ngOnInit(): void {
    this.sliderContainer.nativeElement.addEventListener(
      'wheel',
      (event: WheelEvent) => {
        event.preventDefault();
        this.sliderContainer.nativeElement.scrollLeft += event.deltaY;
      }
    );

    this.updateDialogDimensions();
  }

  dialog = inject(MatDialog);

  @HostListener('window:resize')
  onResize() {
    this.updateDialogDimensions();
  }

  updateDialogDimensions() {
    const width = window.innerWidth;
    if (width < 768) {
      this.dialogDimensions = {
        maxWidth: '98vw',
        maxHeight: '98vh',
      };
    } else {
      this.dialogDimensions = {
        maxWidth: '60vw',
        maxHeight: '90vh',
      };
    }
  }

  openDialog(movie: any) {
    this.dialog.open(MovieModalComponent, {
      data: movie,
      // height: '90vh',
      // width: '60vw',
      maxHeight: this.dialogDimensions.maxHeight,
      maxWidth: this.dialogDimensions.maxWidth,
      panelClass: 'custom-dialog-container',
    });
  }

  getSelectedMovie(movie: any) {
    this.cardService.bannerMovie$.next(movie);
    this.selectedMovieData = movie;
  }
  setHoverMovie(movie: any) {
    this.selectedContent = movie.name;
  }
  cleatHoverMovie() {
    this.selectedContent = null;
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
}
