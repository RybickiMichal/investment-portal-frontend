package com.rybicki.investmentportal.Model;



import yahoofinance.Stock;
import yahoofinance.YahooFinance;

import java.io.IOException;
import java.math.BigDecimal;

public class Company {
    protected String symbol;
    private String name= "";
    private BigDecimal price= new BigDecimal("0");
    private BigDecimal change= new BigDecimal("0");
    private BigDecimal changeInPercent= new BigDecimal("0");
    private BigDecimal annualYieldDividend= new BigDecimal("0");


    public Company(String symbol, boolean loadData) {
        if(loadData) {
            this.symbol = symbol;
            try {
                Stock stock = YahooFinance.get(symbol);
                annualYieldDividend = stock.getDividend().getAnnualYield();
                name = stock.getName();
                price = stock.getQuote().getPrice();
                change = stock.getQuote().getChange();
                changeInPercent = stock.getQuote().getChangeInPercent();
            } catch (IOException e) {
                this.symbol = "Company doesn't exist";
            }
        }else{
            this.symbol = symbol;
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

    public BigDecimal getPrice() {
        return price;
    }

    public BigDecimal getChange() {
        return change;
    }

    public BigDecimal getChangeInPercent() {
        return changeInPercent;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
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

    public void setName(String name) {
        this.name = name;
    }
}
