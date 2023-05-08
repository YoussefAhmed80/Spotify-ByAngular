import { Register } from '../register';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  selectedFile?: File;
  error : string = '';
  submitted :any = '';
  male:boolean=true;
  female:boolean=false;

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$')]),
    birthDate: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    userName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    role: new FormControl(null, [Validators.required]),
    file: new FormControl(null),

  });

  constructor(public _AuthService:AuthService , public _Router:Router) {}

  submitRegisterForm(registerForm: FormGroup) {
    this.submitted = true;
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('firstName', this.registerForm.get('firstName')?.value);
      formData.append('lastName', this.registerForm.get('lastName')?.value);
      formData.append('password', this.registerForm.get('password')?.value);
      formData.append('birthDate', this.registerForm.get('birthDate')?.value);
      formData.append('gender', this.registerForm.get('gender')?.value);
      formData.append('email', this.registerForm.get('email')?.value);
      formData.append('userName', this.registerForm.get('userName')?.value);
      formData.append('role', this.registerForm.get('role')?.value);
      formData.append('file', this.selectedFile,this.selectedFile.name);

    }
    else {
      console.error('No file selected');
    }
    console.log(registerForm.value);
    if(registerForm.valid)
    {
      this._AuthService.register(formData).subscribe((response)=>{
        if(response.isPassed)
        {
          // don't forget to send id with navigation and in every component
          // set applicationId fron url with get function
          console.log("Success");
          if(registerForm.value.role == "User"){
            this._Router.navigate(['/register/user/',this._AuthService.getID()]);
          }
          else if(registerForm.value.role == "Artist")
          {
            this._Router.navigate(['/register/artist/',this._AuthService.getID()]);
          }
          else if(registerForm.value.role == "Admin")
          {
            this._Router.navigate(['/register/admin/']);
          }
        }
      });
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.registerForm.patchValue({
      selectedFile:File
    });
    this.registerForm.get('file')?.updateValueAndValidity();
  }

  ngOnInit(): void {
    // console.log(document.getElementById('myDiv'));
  }

}


