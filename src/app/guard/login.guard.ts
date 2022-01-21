import { Injectable } from '@angular/core';
import {CanActivate } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor (private authService: AuthService){}
  
  canActivate() {

    if(this.authService.isLogged()){
    return true;
  }
  return false 
   
  }
}
