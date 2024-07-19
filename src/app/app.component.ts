import { Component, OnInit } from '@angular/core';
import { ShareImageComponent } from './share-image/share-image.component';
import { ShareImage } from './models/share-image';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ShareImageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  shareImgs!: ShareImage[];

  myShare!: ShareImage
  myOtherShare!: ShareImage
  myLastShare!: ShareImage

  ngOnInit(): void {

    this.shareImgs = [

      new ShareImage(
        'Archibald',
        'Mon meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        280
      ),
      new ShareImage(
        'Montre',
        'Mon meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        2
      ),
      new ShareImage(
        'Voiture',
        'Mon meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        1
      )
    ]
   
    this.shareImgs[0].setLocation('à la montagne');
  }
}

