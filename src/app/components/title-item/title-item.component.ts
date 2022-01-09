import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title-item',
  templateUrl: './title-item.component.html',
  styleUrls: ['./title-item.component.scss']
})
export class TitleItemComponent {

  @Input() title: any;
  @ViewChild('trailer', { static: true }) trailer!: ElementRef<HTMLVideoElement>;

  constructor() { }

  playVideo(): void {   
    this.trailer.nativeElement.play();
  }

  stopVideo(): void {
    this.trailer.nativeElement.currentTime = 0;
    this.trailer.nativeElement.pause();
  }

  getMuted(): boolean {
    return this.trailer.nativeElement.muted;
  }

  toggleSound(): void {
    this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted;
  }

  watchFullVideo(fullVideo: string): void {
    window.open(fullVideo);
  }

}
