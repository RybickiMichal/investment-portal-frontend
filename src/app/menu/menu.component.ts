import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { CompanyDataService } from '../service/data/company-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  

  constructor(private authenticationService:AuthenticationService) { }
  ngOnInit() {}

  getUsername(){
    return this.authenticationService.getAuthenticatedUser().toString()
  }

}
