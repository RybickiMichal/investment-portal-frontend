package com.rybicki.investmentportal.Model;



import yahoofinance.Stock;
import yahoofinance.YahooFinance;

import java.io.IOException;
import java.math.BigDecimal;

public class Company {
    private String symbol;
    private String name;
    private BigDecimal quote;
    private BigDecimal annualYieldDividend;
    private String currency;
//    private String stockExchange;
//    private List history;


    public Company(String symbol) {
        this.symbol = symbol;
        try {
            Stock stock = YahooFinance.get(symbol);
            annualYieldDividend = stock.getDividend().getAnnualYield();
            name = stock.getName();
            quote = stock.getQuote().getPrice();
            currency = stock.getCurrency();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }


    public String getSymbol() {
        return symbol;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getAnnualYieldDividend() {
        return annualYieldDividend;
    }

    public BigDecimal getQuote() {
        return quote;
    }

    public String getCurrency() {
        return currency;
    }

    public void setAnnualYieldDividend(BigDecimal annualYieldDividend) {
        this.annualYieldDividend = annualYieldDividend;
    }

    public void setQuote(BigDecimal quote) {
        this.quote = quote;
    }
}
