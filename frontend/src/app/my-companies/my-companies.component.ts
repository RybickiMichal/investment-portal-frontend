import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../service/data/company-data.service';
import { Router } from '@angular/router';
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
    private companyDataService: CompanyDataService) { }

  ngOnInit() {
    this.companyDataService.retrieveAllCompanies("username").subscribe(
      response => {
        this.companies = response;
      }
    );
    this.interval = setInterval(() => {
      this.refreshCompanies()
    }, 5000);
  }
  ngOnDestroy(){
    if(this.interval){
      clearInterval(this.interval)
    }
  }
  
  companies: Company[]
  message: String
  stock: String
  interval: any

  deleteCompany(symbol: string) {
    this.companyDataService.deleteCompany('username', symbol).subscribe(
      response => {
        this.message = `Company with symbol ${symbol} successfully deleted!`
        this.refreshCompanies();
      }
    )
  }

  refreshCompanies() {
    this.companyDataService.retrieveAllCompanies('username').subscribe(
      response => {
        this.companies = response;
      }
    )
  }

  addCompany(symbol: string) {
    if (symbol == null) {
      return this.message = `You wrote empty symbol. Please write correct symbol!`
    }
    this.companyDataService.addCompany('username', symbol.toUpperCase(), Company).subscribe(
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

  goToCharts(symbol: string){
    this.router.navigate(['mycompanies', 'charts', symbol])
  }

  isPositive(change: number) {
    return change > 0;
  }
  isNegative(change: number) {
    return change < 0;
  }
}
