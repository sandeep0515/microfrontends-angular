import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portal-container';
  public showMenu: boolean;
  constructor() {
    this.showMenu = false;
  }

  public toggleMenu(event: boolean) {
    this.showMenu = event;
  }
}
