import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isUserLoggedIn:boolean;

  constructor(private router:Router) {
    this.isUserLoggedIn = false;
   }

  ngOnInit() {
  }

  onLogin() {
    this.isUserLoggedIn = true;
    this.router.navigate(['/diary/creatediary']);
  }

}
