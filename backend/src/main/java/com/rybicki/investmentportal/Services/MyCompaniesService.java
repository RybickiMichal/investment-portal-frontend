package com.rybicki.investmentportal.Services;

import com.rybicki.investmentportal.Model.Company;
import com.rybicki.investmentportal.Model.CompanyDetails;
import com.rybicki.investmentportal.Model.Stocks;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.UnsatisfiedDependencyException;
import org.springframework.stereotype.Service;
import yahoofinance.Stock;
import yahoofinance.YahooFinance;

import java.io.IOException;
import java.util.ArrayList;

@Service
public class MyCompaniesService {

    private static ArrayList<Company> companies = new ArrayList<>();
    private Stocks stocks = new Stocks();
    private static final Logger LOGGER = LoggerFactory.getLogger(MyCompaniesService.class);

    static{
        companies.add(new Company("DOW", false));
        companies.add(new Company("KO", false));
        companies.add(new Company("CSCO", false));
        companies.add(new Company("IBM", false));
        companies.add(new Company("WBA", false));
//        try {
//            Stock stock = YahooFinance.get("CSCO");
//            if(stock.getStats().getBookValuePerShare()!=null)
//                LOGGER.warn("getBookValuePerShare " + stock.getStats().getBookValuePerShare().toString());
//            if(stock.getStats().getEBITDA()!=null)
//                LOGGER.warn("getEBITDA " + stock.getStats().getEBITDA().toString());
//            if(stock.getStats().getEps()!=null)
//                LOGGER.warn("getEps " + stock.getStats().getEps().toString());
//            if(stock.getStats().getEpsEstimateCurrentYear()!=null)
//                LOGGER.warn("getEpsEstimateCurrentYear " + stock.getStats().getEpsEstimateCurrentYear().toString());
//            if(stock.getStats().getEpsEstimateNextQuarter()!=null)
//                LOGGER.warn("getEpsEstimateNextQuarter " + stock.getStats().getEpsEstimateNextQuarter().toString());
//            if(stock.getStats().getEpsEstimateNextYear()!=null)
//                LOGGER.warn("getEpsEstimateNextYear " + stock.getStats().getEpsEstimateNextYear().toString());
//            if(stock.getStats().getMarketCap()!=null)
//                LOGGER.warn("getMarketCap " + stock.getStats().getMarketCap().toString());
//            if(stock.getStats().getOneYearTargetPrice()!=null)
//                LOGGER.warn("getOneYearTargetPrice " + stock.getStats().getOneYearTargetPrice().toString());
//            if(stock.getStats().getPe()!=null)
//                LOGGER.warn("getPe " + stock.getStats().getPe().toString());
//            if(stock.getStats().getPeg()!=null)
//                LOGGER.warn("getPeg " + stock.getStats().getPeg().toString());
//            if(stock.getStats().getPriceBook()!=null)
//                LOGGER.warn("getPriceBook " + stock.getStats().getPriceBook().toString());
//            if(stock.getStats().getPriceSales()!=null)
//                LOGGER.warn("getPriceSales " + stock.getStats().getPriceSales().toString());
//            if(stock.getStats().getRevenue()!=null)
//                LOGGER.warn("getRevenue" + stock.getStats().getRevenue().toString());
//            if(stock.getStats().getROE()!=null)
//                //zawsze daje 0
//                LOGGER.warn("getROE " + stock.getStats().getROE().toString());
//            if(stock.getStats().getShortRatio()!=null)
//                LOGGER.warn("getShortRatio " + stock.getStats().getShortRatio().toString());
//            if(stock.getStats().getEarningsAnnouncement()!=null)
//                LOGGER.warn("getEarningsAnnouncement " + stock.getStats().getEarningsAnnouncement().toString());
//            if(stock.getStats().getSharesFloat()!=null)
//                LOGGER.warn("getSharesFloat " + stock.getStats().getSharesFloat());
//            if(stock.getStats().getSharesOutstanding()!=null)
//                LOGGER.warn("getSharesOutstanding " + stock.getStats().getSharesOutstanding());
//            if(stock.getStats().getSharesOwned()!=null)
//                LOGGER.warn("getSharesOwned " + stock.getStats().getSharesOwned());
//            LOGGER.error("PRZERWA ");
//
//                LOGGER.warn("getStockExchange " + stock.getStockExchange());
//                LOGGER.warn("getLastTradeDateStr " + stock.getQuote().getLastTradeDateStr());
//            LOGGER.warn("getLastTradeDateStr " + stock.getQuote().getLastTradeDateStr());
//            LOGGER.warn("getLastTradeTimeStr " + stock.getQuote().getLastTradeTimeStr());
//            if(stock.getQuote().getAsk()!=null)
//            LOGGER.warn("getAsk " + stock.getQuote().getAsk().toString());
//            LOGGER.warn("getAskSize " + stock.getQuote().getAskSize());
//            LOGGER.warn("getAvgVolume " + stock.getQuote().getAvgVolume());
//            if(stock.getQuote().getBid()!=null)
//            LOGGER.warn("getBid " + stock.getQuote().getBid().toString());
//            LOGGER.warn("getBidSize " + stock.getQuote().getBidSize());
//            if(stock.getQuote().getChangeFromAvg50()!=null)
//                LOGGER.warn("getChangeFromAvg50 " + stock.getQuote().getChangeFromAvg50().toString());
//            LOGGER.warn("getChangeFromAvg50InPercent " + stock.getQuote().getChangeFromAvg50InPercent());
//            LOGGER.warn("getChangeFromYearLow " + stock.getQuote().getChangeFromYearLow());
//            LOGGER.warn("getChangeFromYearLowInPercent " + stock.getQuote().getChangeFromYearLowInPercent());
//            LOGGER.warn("getLastTradeSize " + stock.getQuote().getLastTradeSize());
//            LOGGER.warn("getPreviousClose " + stock.getQuote().getPreviousClose());
//            LOGGER.warn("getVolume " + stock.getQuote().getVolume());
//            if(stock.getQuote().getYearLow()!=null)
//            LOGGER.warn("getYearLow " + stock.getQuote().getYearLow().toString());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//        } catch (IOException e) {
//            LOGGER.error(e.toString());
//        }
    }

    public ArrayList<Company> findAll(){
        Company companiesArray[] = new Company[companies.size()];
        String companiesSymbols[] = new String[companies.size()];
        companies.toArray(companiesArray);
        for(int x=0; x<companiesArray.length;x++){
            companiesSymbols[x] = companiesArray[x].getSymbol();
        }
        companies = stocks.actualizeCompaniesData(companies, companiesSymbols);
        return companies;
    }

    public Company findBySymbol(String symbol){
        for(Company company: companies){
            if(company.getSymbol().equals(symbol)){
                stocks.actualizeCompanyData(company);
                return company;
            }
        }
        return null;
    }

    public Company deleteBySymbol(String symbol){
        Company company = findBySymbol(symbol);
        if(companies.remove(company)){
            return company;
        }
        return null;
    }

    public Company addBySymbol(String symbol) {
        boolean companyExistInList = false;
        for(Company company: companies){
            if(company.getSymbol().equals(symbol)){
                companyExistInList = true;
            }
        }
        if(!companyExistInList){
            Company newCompany = new Company(symbol, true);
            if(newCompany.getSymbol().equals("Company doesn't exist")){
                return null;
            }
            companies.add(newCompany);
            return newCompany;
        }
        return null;
    }
}
