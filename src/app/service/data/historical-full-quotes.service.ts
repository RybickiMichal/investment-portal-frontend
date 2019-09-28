import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoricalFullQuotesService {

  constructor(private http: HttpClient) { }

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
}
