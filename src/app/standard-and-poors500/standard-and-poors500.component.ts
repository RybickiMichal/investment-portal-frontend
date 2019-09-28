import { Component, OnInit } from '@angular/core';
import { Company } from '../my-companies/my-companies.component';
import { CompanyDataService } from '../service/data/company-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standard-and-poors500',
  templateUrl: './standard-and-poors500.component.html',
  styleUrls: ['./standard-and-poors500.component.css']
})
export class StandardAndPoors500Component implements OnInit {

  constructor(private router: Router,
    private companyDataService: CompanyDataService) { }

  companies: Company[]
  interval: any
  standardAndPoors500: Company = {
    symbol: '',
    changeInPercent: 0,
    name: '',
    price: 0,
    change: 0,
    annualYieldDividend: 0
  }

  ngOnInit() {
    this.refreshIndex()
    this.refreshCompanies()
    this.interval = setInterval(() => {
      this.refreshIndex()
      this.refreshCompanies()
    }, 30000);
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  refreshCompanies() {
    this.companyDataService.retrieveStandardAndPoors500().subscribe(
      response => {
        this.companies = response;
      }
    )
  }

  refreshIndex() {
    this.companyDataService.retrieveStandardAndPoors500BasicInfo().subscribe(
      response => {
        this.standardAndPoors500 = response;
      }
    )
  }

  goToCharts(symbol: string) {
    this.router.navigate(['standardandpoors500', 'charts', symbol])
  }

  isPositive(change: number) {
    return change > 0;
  }
  isNegative(change: number) {
    return change < 0;
  }

}
