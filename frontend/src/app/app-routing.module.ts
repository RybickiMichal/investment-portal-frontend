import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { DowJones30Component } from './dow-jones30/dow-jones30.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { MyCompaniesComponent } from './my-companies/my-companies.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'dowjones30', component: DowJones30Component},
  {path:'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path:'mycompanies', component: MyCompaniesComponent, canActivate:[RouteGuardService]},
  {path:':list/charts/:symbol', component: ChartsComponent},


  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }