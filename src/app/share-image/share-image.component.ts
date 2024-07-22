import { Component, Input, OnInit } from '@angular/core';
import { ShareImage } from '../models/share-image';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-image',
  standalone: true,
  imports: [
    UpperCasePipe,
    CurrencyPipe
  ],
  templateUrl: './share-image.component.html',
  styleUrl: './share-image.component.scss'
})
export class ShareImageComponent{
  @Input() shareImge!: ShareImage;

  constructor(private router: Router) {}

  onViewShareImage() {
    this.router.navigateByUrl(`shareimages/${this.shareImge.id}`);
  }

}

