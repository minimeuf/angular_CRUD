import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  vedi: boolean = false
  vedi2: boolean = true

  constructor( private authService:AuthService ) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logout()
    if(this.vedi == false)
      this.vedi = true
    else
      this.vedi = false
  }
  logOut2(){
    this.authService.logout()
    if(this.vedi2 == false)
      this.vedi2 = true
    else
      this.vedi2 = false
  }
  mostra(){
    if(this.vedi == false)
      this.vedi = true
    else
      this.vedi = false

  }
}
