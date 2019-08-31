import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyDataService } from '../service/data/company-data.service';
import { Company } from '../my-companies/my-companies.component';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 name = ''
  constructor(private router: Router,
    private route:ActivatedRoute,
    private companyDataService: CompanyDataService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.name = this.authenticationService.getAuthenticatedUser()
    this.refreshIndexes()
    this.refreshRandomCompanies()
    this.interval = setInterval(() => {
      this.refreshIndexes()
      this.refreshRandomCompanies()
    }, 10000);
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  randomNasdaq100Companies: Company[]
  randomDowJones30Companies: Company[]
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

  refreshRandomCompanies() {
    this.companyDataService.retrieveRandomDowJones30Companies().subscribe(
      response => {
        this.randomDowJones30Companies = response;
      }
    )
    this.companyDataService.retrieveRandomDNasdaq100Companies().subscribe(
      response => {
        this.randomNasdaq100Companies = response;
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

  goToCharts(symbol: string) {
    this.router.navigate(['welcome', 'charts', symbol])
  }

  isPositive(change: number) {
    return change > 0;
  }
  isNegative(change: number) {
    return change < 0;
  }
}
