package com.rybicki.investmentportal.Service;

import com.rybicki.investmentportal.Model.CompanyImpl;
import com.rybicki.investmentportal.Model.User;
import com.rybicki.investmentportal.Repository.CompanyRepository;
import com.rybicki.investmentportal.Repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class DbInit implements CommandLineRunner {
    private UserRepository userRepository;
    private CompanyRepository companyRepository;
    private PasswordEncoder passwordEncoder;

    public DbInit(UserRepository userRepository, PasswordEncoder passwordEncoder, CompanyRepository companyRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.companyRepository=companyRepository;
    }

    @Override
    public void run(String... args) {
//        // Delete all
//        this.userRepository.deleteAll();
//        this.companyRepository.deleteAll();
//
//        // Crete users
//        User dan = new User("username1",passwordEncoder.encode("password"),"USER","");
//        User admin = new User("username2",passwordEncoder.encode("password"),"USER","");
//        User manager = new User("username3",passwordEncoder.encode("password"),"USER","");
//        User user = new User("username4",passwordEncoder.encode("password"),"USER","");
//
//        List<User> users = Arrays.asList(dan,admin,manager, user);
//
//        // Save to db
//        this.userRepository.saveAll(users);
//        companyRepository.save(new CompanyImpl("FB",dan));
//        companyRepository.save(new CompanyImpl("PSC",dan));
//
//        companyRepository.save(new CompanyImpl("CSCO",admin));
//        companyRepository.save(new CompanyImpl("KO",admin));
//
//        companyRepository.save(new CompanyImpl("CSCO",manager));
//        companyRepository.save(new CompanyImpl("PSC",manager));
//
//        companyRepository.save(new CompanyImpl("AXP",user));
//        companyRepository.save(new CompanyImpl("BA",user));
    }
}
