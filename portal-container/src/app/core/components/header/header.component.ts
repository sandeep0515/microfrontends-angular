import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'portal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenu: EventEmitter<boolean> = new EventEmitter(false) ;

  public showMenu: boolean;
  constructor() {
    this.showMenu = false;
  }

  ngOnInit(): void {
  }

  public onMenuClick() {
    this.showMenu = !this.showMenu;
    this.toggleMenu.emit(this.showMenu);
  }

}
