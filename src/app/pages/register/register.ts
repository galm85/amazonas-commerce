import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,Validators,ValidationErrors,AbstractControl } from '@angular/forms';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  private fb = new FormBuilder();

  registrationForm = this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(2)]],
    lastName:['',[Validators.required,Validators.minLength(2)]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.pattern(/^[0-9]{9,}$/)]],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmPassword:['',[Validators.required]],
    street:[''],
    city:[''],
    country:[''],
    zipcode:[''],
  },{
    validators:this.passwordMatchValidator.bind(this)
  });


  private passwordMatchValidator(control:AbstractControl):ValidationErrors | null{
    const password = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;

    return password === confirm ? null : {passwordMismatch:true}

  }

  onSubmit():void{
    if(this.registrationForm.invalid){
      this.registrationForm.markAllAsTouched();
      return;
    }

    console.log(this.registrationForm.value);
  }
}
