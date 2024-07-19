import { Component, OnInit } from '@angular/core';
import { ShareImageComponent } from '../share-image/share-image.component';
import { ShareImage } from '../models/share-image';
import { ShareImagesService } from '../services/share-images.service';


@Component({
  selector: 'app-share-image-list',
  standalone: true,
  imports: [
    ShareImageComponent
  ],
  templateUrl: './share-image-list.component.html',
  styleUrl: './share-image-list.component.scss'
})
export class ShareImageListComponent implements OnInit{

  shareImgs!: ShareImage[];

  constructor(private shareImagesService: ShareImagesService) { }

  ngOnInit(): void {
    this.shareImgs = this.shareImagesService.getShareImages()
  }
}
