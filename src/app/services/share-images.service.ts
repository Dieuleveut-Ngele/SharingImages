import { Injectable } from '@angular/core';
import { ShareImage } from '../models/share-image';

@Injectable({
  providedIn: 'root'
})
export class ShareImagesService {

    private shareImgs: ShareImage[] = [

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
          ).withLocation('à la montagne'),

          new ShareImage(
            'Voiture',
            'Mon meilleur ami depuis toujours !',
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            new Date(),
            1
          )
    ]
    getShareImages(): ShareImage[] {
        return [...this.shareImgs];
    }  
}  


