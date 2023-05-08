import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-na-create-play-list',
  templateUrl: './na-create-play-list.component.html',
  styleUrls: ['./na-create-play-list.component.scss']
})
export class NaCreatePlayListComponent {

  constructor(private router: Router) { }

  profile()
  {
    this.router.navigate(['/profile']);
  }
}
