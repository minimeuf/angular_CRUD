import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginRes } from 'src/app/classes/authentication/login-res';
import { Injectable } from '@angular/core';
import { LogAdmin } from 'src/app/classes/authentication/a/log-admin';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser!:LoginRes;

  constructor( private http:HttpClient, private route: ActivatedRoute, private router:Router ) { }

  login(loginPayload:LogAdmin){
    return this.http.post<LoginRes>(environment.urlAPI+'api/auth/login/', loginPayload)
  }

  logout(){
    localStorage.removeItem('accessToken')
    localStorage.removeItem('currentUser')
    this.router.navigate([''])
  }

  isLogged(){
    return localStorage.getItem('accessToken') != null;
  }
  utenteCorrente() {
    return localStorage.getItem('currentUser') || null;
  }
  userToken() {
    return localStorage.getItem('accessToken') || null;
  }

}
