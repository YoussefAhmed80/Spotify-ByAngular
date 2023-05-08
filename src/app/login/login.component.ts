import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(public _AuthService:AuthService , public _Router:Router) {}

  error : string = '';

  LoginForm: FormGroup = new FormGroup({
    UserName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    Password: new FormControl(null, [Validators.required]),
    // Validators.pattern('^[A-Z][a-z]{2,8}$')

  });


  submitLoginForm(LoginForm: FormGroup) {

    if(LoginForm.valid)
    {
      this._AuthService.login(LoginForm.value).subscribe((response)=>{

        console.log(response)
        if(response.isPassed == true)
        {
          localStorage.setItem('userToken' , response.data.token);
          this._AuthService.saveUserData();
          this._Router.navigate(['/home']);
          console.log(this._AuthService.getID());
          console.log(this._AuthService.getName());
        }
        else
        {
          console.log("Error")
          this.error = response.data;

        }

      });
      // this._AuthService.login(LoginForm.value).subscribe({
      //   next:data=>console.log(data),
      //   error:err=>console.log(err),
      // })
    }
  }



  ngOnInit(): void {

  }

  register()
  {
    this._Router.navigate(['/register']);
  }

}
