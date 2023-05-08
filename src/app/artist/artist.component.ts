import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
  error : string = '';
  submitted :any = '';
  applicationUser:any='';

  Id:any='';
  fname:string='';
  lname:string='';
  img:string='';

  registerForm: FormGroup = new FormGroup({
    applicationUserId: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    lastName : new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    bio: new FormControl(null, [Validators.required]),
  });

  constructor(public _AuthService:AuthService , public _Router:Router
    ,private activatedRoute:ActivatedRoute) {}

  submitRegisterForm(registerForm: FormGroup) {

    this.submitted = true;
    console.log(registerForm.value);

    if(registerForm.valid)
    {
      this._AuthService.artistRegister(registerForm.value).subscribe((response)=>{
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
      next:data=>{
        // this.registerForm.applicationUserId.value=data.applicationUserId;
        console.log(data);
        this.fname=data.firstName;
        this.lname=data.lastName;
        this.img=data.image;
        console.log(this.registerForm.value);
      },
      error:err=>console.log(err)
     })
    })
   }
}
