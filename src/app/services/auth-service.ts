import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ApiService } from './apiService';
import { User } from '../interfaces/api';

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

  private user:WritableSignal<User | null> = signal(demoUser);



  getUser():Signal<User | null>{
    return this.user
  }

  logoutUser():void{
    this.user.set(null);
  }

  registerUser():void{
    this.user.set(demoUser);
  }
}
