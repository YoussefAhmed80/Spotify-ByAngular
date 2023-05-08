import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-library',
  templateUrl: './your-library.component.html',
  styleUrls: ['./your-library.component.scss']
})
export class YourLibraryComponent {

  constructor( private _Router:Router)
  {

  }


  profile()
  {
    this._Router.navigate(['/profile']);
  }

}
