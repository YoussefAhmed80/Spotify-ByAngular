import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  hide: boolean = true;
  showButton() {
    this.hide = false;
  }

  hideButton() {
    this.hide = true;
  }
}
