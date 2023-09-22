import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchText: string = '';

  updateSpanValue(event: any) {
    this.searchText = event.target.value;
  }
}
