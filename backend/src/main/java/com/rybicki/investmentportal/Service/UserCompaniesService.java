package com.rybicki.investmentportal.Service;

import com.rybicki.investmentportal.Model.*;
import com.rybicki.investmentportal.Repository.CompanyRepository;
import com.rybicki.investmentportal.Repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserCompaniesService {

    private Stocks stocks = new Stocks();
    private static final Logger LOGGER = LoggerFactory.getLogger(UserCompaniesService.class);
    @Autowired
    CompanyRepository companyRepository;
    @Autowired
    UserRepository userRepository;

    public UserCompaniesService() {
    }

    public UserCompaniesService(CompanyRepository companyRepository, UserRepository userRepository) {
        this.companyRepository = companyRepository;
        this.userRepository = userRepository;
    }

    public ArrayList<CompanyBasicInfo> findAll(String username) {
        User user = loadUser(username);
        ArrayList<CompanyBasicInfo> companies = loadCompanies(user);

        CompanyImpl companiesArray[] = new CompanyImpl[companies.size()];
        String companiesSymbols[] = new String[companies.size()];
        companies.toArray(companiesArray);
        for (int x = 0; x < companiesArray.length; x++) {
            companiesSymbols[x] = companiesArray[x].getSymbol();
        }
        if(!companies.isEmpty()) {
            companies = stocks.actualizeCompaniesData(companies, companiesSymbols);
        }
        return companies;
    }

    public CompanyBasicInfo findBySymbol(String symbol, String username) {
        User user = loadUser(username);
        ArrayList<CompanyBasicInfo> companies = loadCompanies(user);
        for (CompanyBasicInfo companyBasicInfo : companies) {
            if (companyBasicInfo.getSymbol().equals(symbol)) {
                stocks.actualizeCompanyData(companyBasicInfo);
                return companyBasicInfo;
            }
        }
        return null;
    }

    public CompanyImpl findCompanyImplBySymbol(String symbol, String username) {
        User user = loadUser(username);
        ArrayList<CompanyImpl> companies = loadCompaniesImpl(user);
        for (CompanyImpl companyBasicInfo : companies) {
            if (companyBasicInfo.getSymbol().equals(symbol)) {
                return companyBasicInfo;
            }
        }
        return null;
    }

    public CompanyBasicInfo deleteBySymbol(String symbol, String username) {
        User user = loadUser(username);
        ArrayList<CompanyBasicInfo> companies = loadCompanies(user);
        CompanyImpl company = findCompanyImplBySymbol(symbol, username);
        System.out.println(company.getSymbol() + company.getUser() + company.getId());
        if (company != null) {
            companyRepository.deleteById(company.getId());
            return new CompanyBasicInfo(company.getSymbol(),false);
        }
        return null;
    }

    public CompanyBasicInfo addBySymbol(String symbol, String username) {
        User user = loadUser(username);
        ArrayList<CompanyBasicInfo> companies = loadCompanies(user);
        boolean companyExistInList = false;
        for (CompanyBasicInfo companyBasicInfo : companies) {
            if (companyBasicInfo.getSymbol().equals(symbol)) {
                companyExistInList = true;
            }
        }
        if (!companyExistInList) {
            CompanyBasicInfo newCompanyBasicInfo = new CompanyBasicInfo(symbol, true);
            if (newCompanyBasicInfo.getSymbol().equals("CompanyBasicInfo doesn't exist")) {
                return null;
            }
            companyRepository.save(new CompanyImpl(newCompanyBasicInfo.getSymbol(), user));
            return newCompanyBasicInfo;
        }
        return null;
    }

    private ArrayList<CompanyBasicInfo> loadCompanies(User user) {
        ArrayList<CompanyBasicInfo> companies = new ArrayList<>();
        List<CompanyImpl> repositoryCompanies = companyRepository.findAll();
        for (CompanyImpl company : repositoryCompanies) {
            Long companyUserId = company.getUser().getId();
            Long repositoryUsernameId = user.getId();
            if (companyUserId == repositoryUsernameId) {
                companies.add(new CompanyBasicInfo(company.getSymbol(), false));
            }
        }
        return companies;
    }

    private ArrayList<CompanyImpl> loadCompaniesImpl(User user) {
        ArrayList<CompanyImpl> companies = new ArrayList<>();
        List<CompanyImpl> repositoryCompanies = companyRepository.findAll();
        for (CompanyImpl company : repositoryCompanies) {
            Long companyUserId = company.getUser().getId();
            Long repositoryUsernameId = user.getId();
            if (companyUserId == repositoryUsernameId) {
                companies.add(new CompanyImpl(company.getSymbol(), user, company.getId()));
            }
        }
        return companies;
    }

    private User loadUser(String username) {
        List<User> users = userRepository.findAll();
        User user = null;
        for (User userInList : users) {
            if (userInList.getUsername().equals(username)) {
                user = userInList;
            }
        }
        if (user == null) {
            System.out.println("User is null!!");
            return null;
        }
        return user;
    }
}
