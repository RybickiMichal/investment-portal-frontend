package com.rybicki.investmentportal.Service;

import com.rybicki.investmentportal.Model.Company;

import java.util.ArrayList;

public interface StockService {

    ArrayList<Company> findAll();

    Company findBySymbol(String symbol);

}
