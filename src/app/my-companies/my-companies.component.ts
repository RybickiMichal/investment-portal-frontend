import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../service/data/company-data.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
export class Company {
  constructor(
    public symbol: string,
    public name: string,
    public price: number,
    public annualYieldDividend: number,
    public change: number,
    public changeInPercent: number
  ) {

  }
}
@Component({
  selector: 'app-my-companies',
  templateUrl: './my-companies.component.html',
  styleUrls: ['./my-companies.component.css']
})
export class MyCompaniesComponent implements OnInit {

  constructor(private router: Router,
    private companyDataService: CompanyDataService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.companyDataService.retrieveUserCompanies(this.authenticationService.getAuthenticatedUser().toString()).subscribe(
      response => {
        this.companies = response;
      }
    );
    this.interval = setInterval(() => {
      this.refreshCompanies()
    }, 30000);
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  companies: Company[]
  message: String
  stock: String
  interval: any

  deleteCompany(symbol: string) {
    this.companyDataService.deleteCompany(this.authenticationService.getAuthenticatedUser().toString(), symbol).subscribe(
      response => {
        this.message = `Company with symbol ${symbol} successfully deleted!`
        this.refreshCompanies();
      }
    )
  }

  refreshCompanies() {
    this.companyDataService.retrieveUserCompanies(this.authenticationService.getAuthenticatedUser().toString()).subscribe(
      response => {
        this.companies = response;
      }
    )
  }

  addCompany(symbol: string) {
    for (let entry of this.companies) {
      if (entry.symbol.toUpperCase() == symbol.toUpperCase()) {
        return this.message = `The company is already in your list!`
      }
    }
    if (symbol == null) {
      return this.message = `You wrote empty symbol. Please write correct symbol!`
    }
    this.companyDataService.addCompany(this.authenticationService.getAuthenticatedUser().toString(), symbol.toUpperCase(), Company).subscribe(
      response => {
        this.message = `Company with symbol ${symbol} successfully added!`
        this.refreshCompanies();
        this.stock = ""
      },
      error => {
        this.message = `Company with symbol ${symbol} doesn't exist. Please write correct symbol!`
      }
    )
  }

  goToCharts(symbol: string) {
    this.router.navigate(['mycompanies', 'charts', symbol])
  }

  isPositive(change: number) {
    return change > 0;
  }
  isNegative(change: number) {
    return change < 0;
  }
}
