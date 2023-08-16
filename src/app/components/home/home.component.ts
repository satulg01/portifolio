import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	peoplePath = '/assets/people.jpg'
	wallpaperPath = '/assets/dark-wallpaper.avif'
}
