package com.rybicki.investmentportal.Services;

import com.rybicki.investmentportal.Model.Company;

import java.util.ArrayList;

public interface StockService {

    ArrayList<Company> findAll();

    Company findBySymbol(String symbol);

}
