import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,Validators,ValidationErrors,AbstractControl } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../services/auth-service';
import { finalize } from 'rxjs';
import { RegisterRequest } from '../../interfaces/api';
import { UiService } from '../../services/ui-service';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  private fb = new FormBuilder();
  public authService = inject(AuthService);
  public router = inject(Router);
  public uiService =  inject(UiService);


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

  message = signal('');

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
    this.uiService.setLoading(true);

    const form = this.registrationForm.value;

    const formData:RegisterRequest = {
          email: form.email!,
          password: form.password!,
          phone: form.phone!,
          first_name: form.firstName!,
          last_name: form.lastName!,
          street: form.street || undefined,
          city: form.city || undefined,
          country: form.country || undefined,
          zipcode: form.zipcode || undefined,
    }

    this.authService.registerUser(formData)
    .pipe(
      finalize(()=>this.uiService.setLoading(false)
    )
    )
    .subscribe({
      next:(res) => {
        if(res.success){
          this.message.set(res.message);
          this.registrationForm.reset();
          setTimeout(()=>{
            this.router.navigate(['/login']);
          },2000);
        }else{
          this.message.set(res.message);
        }
      },
      error:(err)=>{
        console.error('Registration faild',err);
        if(err.error?.message){
          this.message.set(err.error.message);
        }else{
          this.message.set('something went very wrong');
        }
      }
    })

  }
}
