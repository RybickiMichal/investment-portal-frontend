import { Component, OnInit } from '@angular/core';
import { Company } from '../my-companies/my-companies.component';
import { CompanyDataService } from '../service/data/company-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nasdaq100',
  templateUrl: './nasdaq100.component.html',
  styleUrls: ['./nasdaq100.component.css']
})
export class Nasdaq100Component implements OnInit {

  constructor(private router: Router,
    private companyDataService: CompanyDataService) { }

  companies: Company[]
  interval: any
  indexNasdaq100: Company = {
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
    }, 5000);
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  refreshCompanies() {
    this.companyDataService.retrieveNasdaq100().subscribe(
      response => {
        this.companies = response;
      }
    )
  }

  refreshIndex() {
    this.companyDataService.retrieveNasdaq100BasicInfo().subscribe(
      response => {
        this.indexNasdaq100 = response;
      }
    )
  }

  goToCharts(symbol: string) {
    this.router.navigate(['nasdaq100', 'charts', symbol])
  }

  isPositive(change: number) {
    return change > 0;
  }
  isNegative(change: number) {
    return change < 0;
  }

}
