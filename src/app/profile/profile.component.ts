import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistsService } from '../playlists.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  PlayLists:any[] = [];
  hide: boolean = true;

  constructor( private _Router:Router , private _PlaylistsService:PlaylistsService)
  {

  }


  profile()
  {
    this._Router.navigate(['/profile']);
  }

  hideButton() {
    this.hide = true;
  }

  showButton() {
    this.hide = false;
  }

  errorMessage:any;

  // ngOnInit(): void {

  //   this._PlaylistsService.getplaylists("68e33c98-bf6e-46cc-b07f-ecd558be6e50").subscribe({
  //     next:(data)=>{this.PlayLists = data
  //     console.log(this.PlayLists);

  //     },
  //     error:error=>this.errorMessage = error
  //   });


  // }


}
