import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from 'src/app/my-companies/my-companies.component';

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {

  constructor(private http: HttpClient) { }

  retrieveAllCompanies(username: string) {
    return this.http.get<Company[]>(`http://localhost:8080/stocks/${username}/myCompanies`)
  }

  deleteCompany(username: string, symbol: string) {
    return this.http.delete(`http://localhost:8080/stocks/${username}/myCompanies/${symbol}`)
  }

  retrieveDowJones30() {
    return this.http.get<Company[]>(`http://localhost:8080/stocks/dowJones`)
  }

  retrieveDowJones30BasicInfo(){
    return this.http.get<Company>(`http://localhost:8080/stocks/dowJones/getIndexInfo`)
  }

  retrieveRandomDowJones30Companies() {
    return this.http.get<Company[]>(`http://localhost:8080/stocks/dowJones/getRandomCompanies`)
  }

  retrieveStandardAndPoors500() {
    return this.http.get<Company[]>(`http://localhost:8080/stocks/standardPoors`)
  }

  retrieveStandardAndPoors500BasicInfo() {
    return this.http.get<Company>(`http://localhost:8080/stocks/standardPoors/getIndexInfo`)
  }

  retrieveRandomStandardAndPoors500Companies() {
    return this.http.get<Company[]>(`http://localhost:8080/stocks/standardPoors/getRandomCompanies`)
  }

  retrieveNasdaq100 () {
    return this.http.get<Company[]>(`http://localhost:8080/stocks/nasdaq`)
  }

  retrieveNasdaq100BasicInfo () {
    return this.http.get<Company>(`http://localhost:8080/stocks/nasdaq/getIndexInfo`)
  }

  retrieveRandomDNasdaq100Companies() {
    return this.http.get<Company[]>(`http://localhost:8080/stocks/nasdaq/getRandomCompanies`)
  }

  addCompany(username: string, symbol: string, company) {
    return this.http.post(`http://localhost:8080/stocks/${username}/myCompanies/${symbol}`, company)
  }

  retrieveHQLastSevenDays(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalQuotes/lastSevenDays/${symbol}`)
  }

  retrieveHQLastTwoWeeks(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalQuotes/lastTwoWeeks/${symbol}`)
  }

  retrieveHQLastMonth(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalQuotes/lastMonth/${symbol}`)
  }

  retrieveHQLastTwoMonths(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalQuotes/lastTwoMonth/${symbol}`)
  }

  retrieveHQLastHalfYear(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalQuotes/lastHalfYear/${symbol}`)
  }

  retrieveHQLastYear(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalQuotes/lastYear/${symbol}`)
  }

  retrieveHQLastTwoYears(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalQuotes/lastTwoYears/${symbol}`)
  }

  retrieveHQLastFiveYears(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalQuotes/lastFiveYears/${symbol}`)
  }

  retrieveHQLastTenYears(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalQuotes/lastTenYears/${symbol}`)
  }

  retrieveHQLastTwentyYears(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalQuotes/lastTwentyYears/${symbol}`)
  }

  //FULL QUOTES

  retrieveFullHQLastSevenDays(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalFullQuotes/lastSevenDays/${symbol}`)
  }

  retrieveFullHQLastTwoWeeks(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalFullQuotes/lastTwoWeeks/${symbol}`)
  }

  retrieveFullHQLastMonth(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalFullQuotes/lastMonth/${symbol}`)
  }

  retrieveFullHQLastTwoMonths(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalFullQuotes/lastTwoMonth/${symbol}`)
  }

  retrieveFullHQLastHalfYear(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalFullQuotes/lastHalfYear/${symbol}`)
  }

  retrieveFullHQLastYear(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalFullQuotes/lastYear/${symbol}`)
  }

  retrieveFullHQLastTwoYears(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalFullQuotes/lastTwoYears/${symbol}`)
  }

  retrieveFullHQLastFiveYears(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalFullQuotes/lastFiveYears/${symbol}`)
  }

  retrieveFullHQLastTenYears(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalFullQuotes/lastTenYears/${symbol}`)
  }

  retrieveFullHQLastTwentyYears(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/historicalFullQuotes/lastTwentyYears/${symbol}`)
  }

  retrieveFullCompanyData(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/companyDetails/${symbol}`)
  }

  
}
