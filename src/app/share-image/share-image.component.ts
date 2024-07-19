import { Component, Input, OnInit } from '@angular/core';
import { ShareImage } from '../models/share-image';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-share-image',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './share-image.component.html',
  styleUrl: './share-image.component.scss'
})
export class ShareImageComponent implements OnInit {
  @Input() shareImge!: ShareImage;

  
  snapButtonText!: string;
  userHasSnapped!: Boolean;


  ngOnInit(): void {
   
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;

  }
  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.shareImge.removeShare;
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.shareImge.addShare;
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }
}
