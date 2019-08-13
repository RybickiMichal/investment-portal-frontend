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

  ngOnInit() {
    this.companyDataService.retrieveDowJones30().subscribe(
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

  refreshCompanies() {
    this.companyDataService.retrieveDowJones30().subscribe(
      response => {
        this.companies = response;
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
