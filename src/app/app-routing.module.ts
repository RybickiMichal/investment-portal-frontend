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
import { RegisterComponent } from './register/register.component';
import { StandardAndPoors500Component } from './standard-and-poors500/standard-and-poors500.component';
import { Nasdaq100Component } from './nasdaq100/nasdaq100.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'login/:registrated', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'welcome', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'dowjones30', component: DowJones30Component},
  {path:'nasdaq100', component: Nasdaq100Component},
  {path:'standardandpoors500', component: StandardAndPoors500Component},
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
