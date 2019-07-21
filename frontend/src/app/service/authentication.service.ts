import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password){
    // console.log('before ' + this.isUserLogged())
    if(username==="username" && password === 'password'){  
      sessionStorage.setItem('authenticateUser', username);
      // console.log('after ' + this.isUserLogged())
      return true; 
    }
    return false;
  }

  isUserLogged(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}
