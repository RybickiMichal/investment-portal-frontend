package com.rybicki.investmentportal.Services;

import com.rybicki.investmentportal.Model.Company;
import com.rybicki.investmentportal.Model.Stocks;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MyCompaniesService {

    private static ArrayList<Company> companies = new ArrayList<>();
    private Stocks stocks = new Stocks();

    static{
        companies.add(new Company("DOW"));
        companies.add(new Company("KO"));
        companies.add(new Company("CSCO"));
        companies.add(new Company("IBM"));
        companies.add(new Company("WBA"));
    }

    public ArrayList<Company> findAll(){
        for(Company company: companies){
            stocks.actualizeCompanyData(company);
        }
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
            Company newCompany = new Company(symbol);
            if(newCompany.getSymbol().equals("Company doesn't exist")){
                return null;
            }
            companies.add(newCompany);
            return newCompany;
        }
        return null;
    }
}
