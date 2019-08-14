import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  username = 'username'
  password = 'password'
  invalidLogin = false;
  errorMessage = 'Invalid Credentials'


  handleLogin() {
    this.authenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          this.invalidLogin = true
        }
      )
  }

  ngOnInit() {
  }

}
