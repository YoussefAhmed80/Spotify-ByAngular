import { AuthService } from './../auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  error : string = '';
  submitted :any = '';
  applicationUser:any='';

  Id:any;
  fname:string='';
  lname:string='';
  img:string='';

  registerForm: FormGroup = new FormGroup({
    applicationUserId: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    lastName : new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    region: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
  });

  constructor(public _AuthService:AuthService , public _Router:Router,
    private activatedRoute : ActivatedRoute) {}


    // this.submitted = true;
    // console.log(registerForm.value);

    // if(registerForm.valid)
    // {
    //   this._AuthService.artistRegister(registerForm.value).subscribe((response)=>{
    //     if(response.isPassed)
    //     {
    //       this._Router.navigate(['/home']);
    //     }
    //   });
    // }

  submitRegisterForm(registerForm: FormGroup) {

    this.submitted = true;
    console.log(registerForm.value);

    if(registerForm.valid)
    {
      this._AuthService.userRegister(registerForm.value).subscribe((response)=>{
        if(response.isPassed)
        {
          this._Router.navigate(['/home']);
        }
      });
    }
  }

  ngOnInit(): void {
    // this.deptId=this.activatedRoute.snapshot.paramMap.get("id");  //drawback
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
     this.Id=params.get("id");
     this.applicationUser=this._AuthService.getِApplicationUserById(this.Id).subscribe({
      next:data=>console.log(data),
      error:err=>console.log(err)
     })
    })
  }
}
