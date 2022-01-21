import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogAdmin } from '../classes/authentication/a/log-admin';
import { AuthService } from '../services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  vedi: boolean = false

  constructor( private authService:AuthService, private router:Router) { }

  payload:LogAdmin = new LogAdmin()

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.payload).subscribe(data => {
      localStorage.setItem('accessToken',data.accessToken);
      localStorage.setItem('currentUser',JSON.stringify(data.id));
      this.authService.currentUser = data;
      this.router.navigate(['home'])
    })
    if(this.vedi == false)
      this.vedi = true
    else
      this.vedi = false
}

}
