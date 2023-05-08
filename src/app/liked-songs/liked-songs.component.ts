import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liked-songs',
  templateUrl: './liked-songs.component.html',
  styleUrls: ['./liked-songs.component.scss']
})
export class LikedSongsComponent {


  constructor( private _Router:Router)
  {

  }

  profile()
  {
    this._Router.navigate(['/profile']);
  }

}
