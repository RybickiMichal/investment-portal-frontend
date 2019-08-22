package com.rybicki.investmentportal.Model;

import javax.persistence.*;

@Entity
@Table(name = "company")
public class CompanyImpl implements Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    protected String symbol;

    @ManyToOne
    @JoinColumn
    private User user;

    public CompanyImpl() {}

    public CompanyImpl(String symbol, User user) {
        this.symbol = symbol;
        this.user = user;
    }

    public CompanyImpl(String symbol, User user, Long id) {
        this.symbol = symbol;
        this.user = user;
        this.id = id;
    }

    @Override
    public String getSymbol() {
        return symbol;
    }

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }


}
