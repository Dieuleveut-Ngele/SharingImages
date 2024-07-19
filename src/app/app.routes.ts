import { Routes } from '@angular/router';
import { ShareImageListComponent } from './share-image-list/share-image-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    { path: 'shareimages', component: ShareImageListComponent },
    { path: '', component: LandingPageComponent }
];
