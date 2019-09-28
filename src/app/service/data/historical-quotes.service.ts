import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoricalQuotesService {

  constructor(private http: HttpClient) { }

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
}
