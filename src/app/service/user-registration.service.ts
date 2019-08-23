import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    user.password = window.btoa(user.password)
    return this.http.post(`http://localhost:8080/users/register`, user)
  }
  
  userExists(username: String) {
    return this.http.get<boolean>(`http://localhost:8080/users/${username}`)
  }
}
