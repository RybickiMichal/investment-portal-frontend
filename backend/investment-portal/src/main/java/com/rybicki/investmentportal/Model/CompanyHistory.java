package com.rybicki.investmentportal.Model;

import yahoofinance.Stock;
import yahoofinance.YahooFinance;
import yahoofinance.histquotes.HistoricalQuote;
import yahoofinance.histquotes.Interval;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.*;

public class CompanyHistory {

    private List<HistoricalQuote> historicalQuotes = new ArrayList<>();
    private Map<Calendar, BigDecimal> companyHistoricalStocks = new HashMap<>();

    public CompanyHistory() {

    }

    public Map<Calendar, BigDecimal> getHistoricalQuotes(String symbol, int yearsAgo, int monthsAgo, int daysAgo, Interval interval){
        historicalQuotes = null;
        try {
            Calendar calendar = Calendar.getInstance();
            if(yearsAgo > 0) {
                calendar.add(Calendar.YEAR, -yearsAgo);
            }
            if(monthsAgo > 0) {
                calendar.add(Calendar.MONTH, -monthsAgo);
            }
            if(daysAgo > 0) {
                calendar.add(Calendar.DAY_OF_YEAR, -daysAgo);
            }

            Stock stock = YahooFinance.get(symbol, calendar, interval);

            this.historicalQuotes = stock.getHistory();
            for (int x = 0; x < historicalQuotes.size(); x++) {
                companyHistoricalStocks.put(historicalQuotes.get(x).getDate(), historicalQuotes.get(x).getClose());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return companyHistoricalStocks;
    }
}
