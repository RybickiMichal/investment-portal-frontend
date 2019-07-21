package com.rybicki.investmentportal.Services;

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

//    private static int idCounter = 0;
//    public Todo save(Todo todo) {
//        if(todo.getId()==-1 || todo.getId()==0){
//            todo.setId(++idCounter);
//            dowJones30.add(todo);
//        }else{
//            deleteById(todo.getId());
//            dowJones30.add(todo);
//        }
//        return todo;
//    }

    //    public Todo deleteById(long id){
//        Todo todo = findBySymbol(id);
//        if(dowJones30.remove(todo)){
//            return todo;
//        }
//        return null;
//    }
}
