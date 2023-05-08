import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  audio!: any;
  playBtn!: any;
  pauseBtn!: any;
  progressBar!: any;

  constructor() { }

  ngOnInit(): void {
    this.audio = document.querySelector('audio');
    this.playBtn = document.querySelector('.play');
    this.pauseBtn = document.querySelector('.pause');
    this.progressBar = document.querySelector('input[type="range"]');

    this.playBtn.addEventListener('click', () => {
      this.audio.play();
    });

    this.pauseBtn.addEventListener('click', () => {
      this.audio.pause();
    });

  }
  onTimeUpdate(event: Event) {
    const progress: number = (event.target as HTMLAudioElement).currentTime / (event.target as HTMLAudioElement).duration * 100;
    this.progressBar.value = progress;
  }
  /******************TOGGLE****************** */

  isPlaying = false;
  isSquareButton = true;

  togglePlayPause(): void {
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  toggleButtonShape(): void {
    this.isSquareButton = !this.isSquareButton;
  }


  /********************************************** */

}