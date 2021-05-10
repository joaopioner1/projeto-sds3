package com.devsuperior.desvendas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsuperior.desvendas.dto.SaleDTO;
import com.devsuperior.desvendas.entities.Sale;
import com.devsuperior.desvendas.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	public Page<SaleDTO> findAll(Pageable pageable) {
		Page<Sale> result = repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}
}
