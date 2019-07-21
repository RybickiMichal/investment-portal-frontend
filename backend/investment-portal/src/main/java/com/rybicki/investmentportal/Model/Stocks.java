package com.rybicki.investmentportal.Model;

import yahoofinance.Stock;
import yahoofinance.YahooFinance;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Map;

public class Stocks {
    private ArrayList<Company> dowJones30;
    private static String[] dowJones30Symbols = new String[] {"MMM", "AXP","AAPL","BA","CAT","CVX","CSCO","KO","DIS","DOW","XOM","GS","HD","IBM","INTC","JNJ","JPM","MCD","MRK","MSFT","NKE","PFE","PG","TRV","UTX","UNH","VZ","V","WMT","WBA"};;

    public Stocks(){
        dowJones30 = new ArrayList<Company>();
        for (int x=0; x<dowJones30Symbols.length;x++){
            dowJones30.add(new Company(dowJones30Symbols[x]));
        }
    }

    public ArrayList getDowJones30(){
        return dowJones30;
    }

    public Company actualizeCompanyData(Company company){
        try {
            Stock stock = YahooFinance.get(company.getSymbol());
            company.setAnnualYieldDividend(stock.getDividend().getAnnualYield());
            company.setQuote(stock.getQuote().getPrice());
            company.setChange(stock.getQuote().getChange());
            company.setChangeInPercent(stock.getQuote().getChangeInPercent());
            return company;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public void actualizeDowJones30Data(){
        try {
            Map<String, Stock> stock = YahooFinance.get(dowJones30Symbols);
            dowJones30.forEach((company) ->{
                for (int x=0; x<dowJones30Symbols.length;x++){
                    if(dowJones30Symbols[x].equals(company.getSymbol())){
                        company.setAnnualYieldDividend(stock.get(dowJones30Symbols[x]).getDividend().getAnnualYield());
                        company.setQuote(stock.get(dowJones30Symbols[x]).getQuote().getPrice());
                        company.setChange(stock.get(dowJones30Symbols[x]).getQuote().getChange());
                        company.setChangeInPercent(stock.get(dowJones30Symbols[x]).getQuote().getChangeInPercent());
                    }
                }
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
