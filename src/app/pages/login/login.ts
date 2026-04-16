import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators ,ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { LoginRequest } from '../../interfaces/api';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private fb = new FormBuilder();
  public authService = inject(AuthService);
  public router = inject(Router);

  message = signal('');
  loader = signal(false);

  loginForm = this.fb.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  })


  onSubmit():void{
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loader.set(true);

    const formData:LoginRequest = {
      email:this.loginForm.value.email!,
      password:this.loginForm.value.password!
    }

    this.authService.loginUser(formData)
    .pipe(
      finalize(()=>this.loader.set(false))
    )
    .subscribe({
      next:(res)=>{
        if(res.success){
          // this.loginForm.reset();
          // this.router.navigate(['/']);
          console.log(res);
        }
        else{
          this.message.set(res.message ?? 'Somthing went wrong front')
        }
      },
      error:(err)=>{
        console.error('Login Fail: ',err);
        if(err.error?.message){
          this.message.set(err.error.message);
        }else{
          this.message.set('something went very wrong');
        }
      }
    })
  }
}
