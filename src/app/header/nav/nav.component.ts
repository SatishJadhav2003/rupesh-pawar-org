import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
areaExpand:boolean = false;
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

