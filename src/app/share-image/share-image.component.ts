import { Component, Input, OnInit } from '@angular/core';
import { ShareImage } from '../models/share-image';
import { CurrencyPipe, DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ShareImagesService } from '../services/share-images.service';

@Component({
  selector: 'app-share-image',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './share-image.component.html',
  styleUrl: './share-image.component.scss'
})
export class ShareImageComponent implements OnInit {
  @Input() shareImge!: ShareImage;

  snapButtonText!: string;
  userHasSnapped!: Boolean;
  currencyNumber = 0.336;

  constructor(private shareImagesService: ShareImagesService) {}

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
    this.shareImagesService.unSnapShareImageById(this.shareImge.id, 'unSnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.shareImagesService.snapShareImageById(this.shareImge.id, 'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }
}

