package com.rybicki.investmentportal.Conntroller;

import com.rybicki.investmentportal.Model.CompanyHistory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import yahoofinance.histquotes.Interval;

import java.math.BigDecimal;
import java.util.Calendar;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CompanyHistoryController {
    private CompanyHistory companyHistory = new CompanyHistory();

    @GetMapping("/stocks/historicalQuotes/lastSevenDays/{symbol}")
    public Map<Calendar, BigDecimal> getLastSevenDaysQuotes(@PathVariable String symbol){
        return  companyHistory.getHistoricalQuotes(symbol, 0, 0, 7, Interval.DAILY);
    }

    @GetMapping("/stocks/historicalQuotes/lastTwoWeeks/{symbol}")
    public Map<Calendar, BigDecimal> getLastTwoWeeksQuotes(@PathVariable String symbol){
        return  companyHistory.getHistoricalQuotes(symbol, 0, 0, 14, Interval.DAILY);
    }

    @GetMapping("/stocks/historicalQuotes/lastMonth/{symbol}")
    public Map<Calendar, BigDecimal> getLastMonthQuotes(@PathVariable String symbol){
        return  companyHistory.getHistoricalQuotes(symbol, 0, 1, 0, Interval.DAILY);
    }

    @GetMapping("/stocks/historicalQuotes/lastTwoMonth/{symbol}")
    public Map<Calendar, BigDecimal> getLastTwoMonthQuotes(@PathVariable String symbol){
        return  companyHistory.getHistoricalQuotes(symbol, 0, 2, 0, Interval.DAILY);
    }

    @GetMapping("/stocks/historicalQuotes/lastHalfYear/{symbol}")
    public Map<Calendar, BigDecimal> getLastHalfYearQuotes(@PathVariable String symbol){
        return  companyHistory.getHistoricalQuotes(symbol, 0, 6, 1, Interval.DAILY);
    }

    @GetMapping("/stocks/historicalQuotes/lastYear/{symbol}")
    public Map<Calendar, BigDecimal> getLastYearQuotes(@PathVariable String symbol){
        return  companyHistory.getHistoricalQuotes(symbol, 1, 0, 0, Interval.DAILY);
    }

    @GetMapping("/stocks/historicalQuotes/lastTwoYears/{symbol}")
    public Map<Calendar, BigDecimal> getLastTwoYearQuotes(@PathVariable String symbol){
        return  companyHistory.getHistoricalQuotes(symbol, 2, 0, 0, Interval.DAILY);
    }

    @GetMapping("/stocks/historicalQuotes/lastFiveYears/{symbol}")
    public Map<Calendar, BigDecimal> getLastFiveYearQuotes(@PathVariable String symbol){
        return  companyHistory.getHistoricalQuotes(symbol, 5, 0, 0, Interval.WEEKLY);
    }

    @GetMapping("/stocks/historicalQuotes/lastTenYears/{symbol}")
    public Map<Calendar, BigDecimal> getLastTenYearQuotes(@PathVariable String symbol){
        return  companyHistory.getHistoricalQuotes(symbol, 10, 0, 0, Interval.MONTHLY);
    }

    @GetMapping("/stocks/historicalQuotes/lastTwentyYears/{symbol}")
    public Map<Calendar, BigDecimal> getLastTwentyYearQuotes(@PathVariable String symbol){
        return  companyHistory.getHistoricalQuotes(symbol, 20, 0, 0, Interval.MONTHLY);
    }

}
