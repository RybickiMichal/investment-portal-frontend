import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../service/user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string
  password: string
  errorMessage: string
  usernameMessage: string
  passwordMessage: string

  constructor(
    private router: Router,
    private userRegistrationService: UserRegistrationService
  ) { }

  ngOnInit() {
  }

  register() {
    if (this.username && this.password) {
      if (this.usernameMessage || this.passwordMessage || this.errorMessage) {
        this.usernameMessage = null
        this.passwordMessage = null
        this.errorMessage = null
      }
      let user = new User()
      user.username = this.username
      user.password = this.password
      this.validateData(user)
      if (!this.usernameMessage && !this.passwordMessage) {
        return this.userRegistrationService.userExists(user.username).subscribe(
          data => {
            if (!data) {
              this.userRegistrationService.register(user).subscribe(
                data => {
                  this.router.navigate(['login', 'registrated'])
                },
                error => {
                  this.errorMessage = 'Invalid Credentials.'
                }
              )
            }else{
              this.errorMessage = 'User already exists'
            }
          }
        )
      }
    }
  }

  validateData(user: User) {
    if (user.username.length < 5) {
      this.usernameMessage = 'Login should have minimum 5 chars'
    }
    if (user.password.length < 8) {
      this.passwordMessage = 'Login should have minimum 8 chars'
    }
  }
}
export class User {
  username: string;
  password: string;
  roles: string;
  permissions: string;
}
