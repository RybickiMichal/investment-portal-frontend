package com.rybicki.investmentportal.Conntroller;

import com.rybicki.investmentportal.Model.Company;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;

public interface StockController {

    ArrayList<Company> getAllCompanies();

    Company getCompany(@PathVariable String index);

}
