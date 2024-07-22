import { Component, OnInit } from '@angular/core';
import { ShareImage } from '../models/share-image';
import { CurrencyPipe, DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ShareImagesService } from '../services/share-images.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-share-image',
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
  templateUrl: './single-share-image.component.html',
  styleUrl: './single-share-image.component.scss'
})
export class SingleShareImageComponent implements OnInit {
  shareImge!: ShareImage;

  snapButtonText!: string;
  userHasSnapped!: Boolean;
  currencyNumber = 0.336;

  constructor(private shareImagesService: ShareImagesService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;

    const shareImgeId = this.route.snapshot.params['id'];
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

