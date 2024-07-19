import { Component, OnInit } from '@angular/core';
import { ShareImageListComponent } from './share-image-list/share-image-list.component';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ShareImageListComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{

  
}

