package com.rybicki.investmentportal.Services;

import com.rybicki.investmentportal.Model.Company;

import java.util.ArrayList;

public interface StockService {

    public ArrayList<Company> findAll();

    public Company findBySymbol(String symbol);

}
