package com.rybicki.investmentportal.Controller;

import com.rybicki.investmentportal.Model.Company;
import com.rybicki.investmentportal.Services.MyCompaniesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MyCompaniesController {
    @Autowired
    private MyCompaniesService myCompaniesService;

    @GetMapping("/stocks/{username}/myCompanies")
    public ArrayList<Company> getAllCompanies(){
        return myCompaniesService.findAll();
    }

    @GetMapping("/stocks/{username}/myCompanies/{symbol}")
    public Company getCompany(@PathVariable String symbol){
        return myCompaniesService.findBySymbol(symbol);
    }

    @DeleteMapping("/stocks/{username}/myCompanies/{symbol}")
    public ResponseEntity<Void> deleteCompany(@PathVariable String username, @PathVariable String symbol){
        Company company = myCompaniesService.deleteBySymbol(symbol);
        if(company != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/stocks/{username}/myCompanies/{symbol}")
    public ResponseEntity<Void> addCompany(@PathVariable String username, @PathVariable String symbol){
        Company createdCompany = myCompaniesService.addBySymbol(symbol);
        if(createdCompany == null){
            return ResponseEntity.badRequest().build();
        }
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().buildAndExpand(createdCompany.getSymbol()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
