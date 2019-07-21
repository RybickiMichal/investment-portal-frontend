import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password){
    if(username==="username" && password === 'password'){  
      sessionStorage.setItem('authenticateUser', username);
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
