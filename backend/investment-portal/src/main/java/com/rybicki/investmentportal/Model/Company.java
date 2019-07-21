package com.rybicki.investmentportal.Model;



import yahoofinance.Stock;
import yahoofinance.YahooFinance;

import java.io.IOException;
import java.math.BigDecimal;

public class Company {
    private String symbol;
    private String name;
    private BigDecimal quote;
    private BigDecimal change;
    private BigDecimal changeInPercent;
    private BigDecimal annualYieldDividend;


    public Company(String symbol) {
        this.symbol = symbol;
        try {
            Stock stock = YahooFinance.get(symbol);
            annualYieldDividend = stock.getDividend().getAnnualYield();
            name = stock.getName();
            quote = stock.getQuote().getPrice();
            change = stock.getQuote().getChange();
            changeInPercent = stock.getQuote().getChangeInPercent();
        } catch (IOException e) {
            this.symbol = "Company doesn't exist";
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

    public BigDecimal getChange() {
        return change;
    }

    public BigDecimal getChangeInPercent() {
        return changeInPercent;
    }

    public void setQuote(BigDecimal quote) {
        this.quote = quote;
    }

    public void setChange(BigDecimal change) {
        this.change = change;
    }

    public void setChangeInPercent(BigDecimal changeInPercent) {
        this.changeInPercent = changeInPercent;
    }

    public void setAnnualYieldDividend(BigDecimal annualYieldDividend) {
        this.annualYieldDividend = annualYieldDividend;
    }

}
