import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  username: String
  password: String
  invalidLogin: boolean = false;
  message: String

  ngOnInit() {
    let param = this.route.snapshot.params['registrated']
    if(param){
      this.message = "Registration completed. You can login now."
    }
  }

  handleLogin() {
    this.authenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          this.invalidLogin = true
          this.message = "Invalid Credentials"
        }
      )
  }

  goToRegister(){
    this.router.navigate(['register'])
  }

}
