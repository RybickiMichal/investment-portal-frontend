import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { templateJitUrl } from '@angular/compiler';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private authentication: AuthenticationService,
    private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.authentication.isUserLogged()){
        return true;
      }
      this.router.navigate(['login']);
      return false;
    }

}
