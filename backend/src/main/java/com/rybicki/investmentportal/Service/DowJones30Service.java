package com.rybicki.investmentportal.Service;

import com.rybicki.investmentportal.Model.Company;
import com.rybicki.investmentportal.Model.Stocks;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class DowJones30Service implements StockService {

    private Stocks stocks = new Stocks();
    private ArrayList<Company> dowJones30 = stocks.getDowJones30();
    private String[] dowJones30symbols = stocks.getDowJones30Symbols();

    @Override
    public ArrayList<Company> findAll(){
        dowJones30 = stocks.actualizeCompaniesData(dowJones30, dowJones30symbols);
        return dowJones30;
    }

    @Override
    public Company findBySymbol(String symbol){
        for(Company company: dowJones30){
            if(company.getSymbol().equals(symbol)){
                stocks.actualizeCompanyData(company);
                return company;
            }
        }
        return null;
    }
}
