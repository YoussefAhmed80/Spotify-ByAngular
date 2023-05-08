import { Component , OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navhome',
  templateUrl: './navhome.component.html',
  styleUrls: ['./navhome.component.scss']
})
export class NavhomeComponent implements OnInit{

  isLogin : boolean  = false;

  constructor(private _AuthService : AuthService , private _Router:Router) {}

  ngOnInit(): void {

    this._AuthService.userData.subscribe(()=>{

      if(this._AuthService.userData.getValue() != null)
      {
          this.isLogin = true;
      }
      else
      {
        this.isLogin = false;
      }
    });
  }


  logOut()
  {
    this._AuthService.logOut();
  }

  profile()
  {
    this._Router.navigate(['/profile']);
  }

}
