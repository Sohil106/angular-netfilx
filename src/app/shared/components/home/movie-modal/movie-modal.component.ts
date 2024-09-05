import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  featherCheck,
  featherPause,
  featherPlay,
  featherThumbsUp,
  featherVolume2,
  featherVolumeX,
} from '@ng-icons/feather-icons';
import { faThumbsUp } from '@ng-icons/font-awesome/regular';
import { faSolidThumbsUp } from '@ng-icons/font-awesome/solid';

import { CardsService } from '../../../../core/services/cards.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-modal',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, NgIconComponent, CommonModule],
  providers: [
    provideIcons({
      featherPlay,
      featherPause,
      featherThumbsUp,
      featherCheck,
      featherVolume2,
      featherVolumeX,
      faThumbsUp,
      faSolidThumbsUp,
    }),
  ],
  templateUrl: './movie-modal.component.html',
  styleUrl: './movie-modal.component.scss',
})
export class MovieModalComponent {
  data = inject(MAT_DIALOG_DATA);
  @ViewChild('player') videoPlayer!: ElementRef;
  @ViewChild('volumeBar') volumeBar!: ElementRef;
  @ViewChild('progressBar') progressBar!: ElementRef;
  isPaused: boolean = false;
  isMuted: boolean = true;
  isLiked: boolean = false;
  isWatched: boolean = false;

  cardService = inject(CardsService);

  constructor() {
    // console.log(this.data);
    // console.log(this.data.id);
    // console.log(this.cardService.likedMovies);
    // console.log(
    //   this.cardService.likedMovies.some((movie) => {
    //     movie.id == this.data.id;
    //   })
    // );
    this.isLiked = this.cardService.likedMovies.some(
      (movie) => movie.id == this.data.id
    );

    this.isWatched = this.cardService.watchedMovies.some(
      (movie) => movie.id == this.data.id
    );
  }
  // setVolume() {
  //   this.videoPlayer.nativeElement.volume = parseInt(
  //     this.volumeBar.nativeElement.value
  //   );
  // }

  // Update the progress bar
  updateProgressBar() {
    // Work out how much of the media has played via the duration and currentTime parameters
    var percentage = Math.floor(
      (100 / this.videoPlayer.nativeElement.duration) *
        this.videoPlayer.nativeElement.currentTime
    );
    // Update the progress bar's value
    this.progressBar.nativeElement.value = percentage;
    // Update the progress bar's text (for browsers that don't support the progress element)
    this.progressBar.nativeElement.innerHTML = percentage + '% played';
  }
  seek(e: any) {
    var percent = e.offsetX / this.progressBar.nativeElement.offsetWidth;
    this.videoPlayer.nativeElement.currentTime =
      percent * this.videoPlayer.nativeElement.duration;
    e.target.value = Math.floor(percent / 100);
    e.target.innerHTML = this.progressBar.nativeElement.value + '% played';
  }

  playPauseVideo() {
    if (this.videoPlayer.nativeElement.paused) {
      this.videoPlayer.nativeElement.play();
      this.isPaused = false;
    } else {
      this.videoPlayer.nativeElement.pause();
      this.isPaused = true;
    }
  }
  muteUnmuteVolume() {
    if (this.videoPlayer.nativeElement.muted) {
      this.videoPlayer.nativeElement.muted = false;
      this.isMuted = false;
    } else {
      this.videoPlayer.nativeElement.muted = true;
      this.isMuted = true;
    }
  }
  toggleLike(data: any) {
    this.cardService.likedMovie$.next(data);
    this.isLiked = !this.isLiked;
  }

  toggleWatch(data: any) {
    this.cardService.watchedMovie$.next(data);
    this.isWatched = !this.isWatched;
  }
}
