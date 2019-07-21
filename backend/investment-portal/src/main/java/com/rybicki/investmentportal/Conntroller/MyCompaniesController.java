package com.rybicki.investmentportal.Conntroller;

import com.rybicki.investmentportal.Model.Company;
import com.rybicki.investmentportal.Services.MyCompaniesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    @PutMapping("/stocks/{username}/myCompanies/{symbol}")
    public ResponseEntity<Company> updateCompany(@PathVariable String username, @PathVariable String symbol){
        Company companyUpdated = myCompaniesService.addBySymbol(symbol);
        if(companyUpdated == null){
            return ResponseEntity.badRequest().build();
        }
        return new ResponseEntity<Company>(companyUpdated, HttpStatus.OK);
    }

    @PostMapping("/stocks/{username}/myCompanies/{symbol}")
    public ResponseEntity<Void> createCompany(@PathVariable String username, @PathVariable String symbol){
        Company createdCompany = myCompaniesService.addBySymbol(symbol);
        if(createdCompany == null){
            return ResponseEntity.badRequest().build();
        }
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().buildAndExpand(createdCompany.getSymbol()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
