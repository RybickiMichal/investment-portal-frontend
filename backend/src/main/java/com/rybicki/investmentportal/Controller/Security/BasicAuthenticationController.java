package com.rybicki.investmentportal.Controller.Security;

import com.rybicki.investmentportal.Model.Company;
import com.rybicki.investmentportal.Service.MyCompaniesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {

    @GetMapping("/basicauth")
    public AuthenticationBean authenticate(){
        return new AuthenticationBean("You are authenticated");
    }

}
