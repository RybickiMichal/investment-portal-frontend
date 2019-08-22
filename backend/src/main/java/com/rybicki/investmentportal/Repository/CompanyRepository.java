package com.rybicki.investmentportal.Repository;

import com.rybicki.investmentportal.Model.CompanyImpl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface CompanyRepository extends JpaRepository<CompanyImpl, Integer> {

    @Transactional
    Long deleteById(Long id);

    @Transactional
    Long deleteBySymbol(String symbol);
}
