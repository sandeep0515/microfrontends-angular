import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'portal-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('drawer', { static: false }) drawer: MatDrawer;
  @Input() 
  set showMenu(value: boolean) {
    this._showMenu = value;
    if (this.drawer) {
      this.drawer.toggle();
    }
  }

  get() {
    this._showMenu;
  }
  private _showMenu: boolean;
  constructor() { 
    this.showMenu = false;
  }

  ngOnInit(): void {
  }

}
