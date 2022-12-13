import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Favorites', url: '/favorites', icon: 'heart' },
    { title: 'Food Report', url: '/food-report', icon: 'document-text' },

  ];
  constructor() {}
}
