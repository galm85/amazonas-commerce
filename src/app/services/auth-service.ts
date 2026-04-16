import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ApiService } from './apiService';
import { RegisterResponse, User } from '../interfaces/api';
import { catchError, map, Observable, of } from 'rxjs';

const demoUser:User = {
    id:'558s232',
    firstName:'Gal',
    lastName:'Mizrahi',
    phone:'054588585',
    email:'gal@email.com'
}


@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService{

  private user:WritableSignal<User | null> = signal(null);



  getUser():Signal<User | null>{
    return this.user
  }

  logoutUser():void{
    this.user.set(null);
  }

  registerUser(data:any):Observable<RegisterResponse>{
    return this.httpClient.post<RegisterResponse>(`${this.BASE_URL}/auth/register`,data);
  }
}
