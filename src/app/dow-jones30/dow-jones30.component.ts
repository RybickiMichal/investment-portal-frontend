import { Component, OnInit } from '@angular/core';
import { Company } from '../my-companies/my-companies.component';
import { CompanyDataService } from '../service/data/company-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dow-jones30',
  templateUrl: './dow-jones30.component.html',
  styleUrls: ['./dow-jones30.component.css']
})
export class DowJones30Component implements OnInit {

  constructor(private router: Router,
    private companyDataService:CompanyDataService) { }

  companies: Company[]
  interval: any
  indexDowJones30: Company = {
    symbol: '',
    changeInPercent: 0,
    name: '',
    price: 0,
    change: 0,
    annualYieldDividend:0
  }

  ngOnInit() {
    this.refreshCompanies()
    this.refreshIndex()
    this.interval = setInterval(() => {
      this.refreshCompanies()
      this.refreshIndex()
    }, 30000);
  }
  ngOnDestroy(){
    if(this.interval){
      clearInterval(this.interval)
    }
  }

  refreshCompanies() {
    this.companyDataService.retrieveDowJones30().subscribe(
      response => {
        this.companies = response;
      }
    )
  }

  refreshIndex() {
    this.companyDataService.retrieveDowJones30BasicInfo().subscribe(
      response => {
        this.indexDowJones30 = response;
      } 
    )
  }

  goToCharts(symbol: string){
    this.router.navigate(['dowjones30', 'charts', symbol])
  }

  isPositive(change: number) {
    return change > 0;
  }
  isNegative(change: number) {
    return change < 0;
  }

}
