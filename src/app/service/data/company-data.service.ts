import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from 'src/app/my-companies/my-companies.component';

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {

  constructor(private http: HttpClient) { }

  retrieveUserCompanies(username: string) {
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

  retrieveRandomNasdaq100Companies() {
    return this.http.get<Company[]>(`http://localhost:8080/stocks/nasdaq/getRandomCompanies`)
  }

  retrieveNasdaq100DowJones30SAndPoors500Indexes() {
    return this.http.get<Company[]>(`http://localhost:8080/stocks/index/getNasdaq100DowJones30SAndP500Indexes`)
  }

  addCompany(username: string, symbol: string, company) {
    return this.http.post(`http://localhost:8080/stocks/${username}/myCompanies/${symbol}`, company)
  }

  retrieveFullCompanyData(symbol: string) {
    return this.http.get<Object>(`http://localhost:8080/stocks/companyDetails/${symbol}`)
  }

  
}
