import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyDataService } from '../service/data/company-data.service';
import { Company } from '../my-companies/my-companies.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 name = ''
  constructor(private router: Router,
    private route:ActivatedRoute,
    private companyDataService: CompanyDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
    this.refreshIndexes()
    this.interval = setInterval(() => {
      this.refreshIndexes()
    }, 5000);
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  standardAndPoors500: Company = {
    symbol: '',
    changeInPercent: 0,
    name: '',
    price: 0,
    change: 0,
    annualYieldDividend: 0
  }
  indexDowJones30: Company = {
    symbol: '',
    changeInPercent: 0,
    name: '',
    price: 0,
    change: 0,
    annualYieldDividend:0
  }
  indexNasdaq100: Company = {
    symbol: '',
    changeInPercent: 0,
    name: '',
    price: 0,
    change: 0,
    annualYieldDividend:0
  }
  interval: any

  refreshIndexes() {
    this.companyDataService.retrieveNasdaq100BasicInfo().subscribe(
      response => {
        this.indexNasdaq100 = response;
      }
    )
    this.companyDataService.retrieveDowJones30BasicInfo().subscribe(
      response => {
        this.indexDowJones30 = response;
      } 
    )
    this.companyDataService.retrieveStandardAndPoors500BasicInfo().subscribe(
      response => {
        this.standardAndPoors500 = response;
      }
    )
  }

  goToDowJones30() {
    this.router.navigate(['dowjones30'])
  }

  goToNasdaq100() {
    this.router.navigate(['nasdaq100'])
  }

  goToStandardAndPoors500() {
    this.router.navigate(['standardandpoors500'])
  }

  isPositive(change: number) {
    return change > 0;
  }
  isNegative(change: number) {
    return change < 0;
  }
}
