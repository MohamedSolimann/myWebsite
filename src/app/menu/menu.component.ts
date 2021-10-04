import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public isMenuCollapsed = true;
  public hover = {};

  toggleHover() {
    if (!this.isMenuCollapsed) {
      setTimeout(() => {
        return '#202529';
      }, 2000);
    } else {
      setTimeout(() => {
        return '#3F4245';
      }, 2000);
    }
    // return this.isMenuCollapsed ? '' : 'none';
  }
}
