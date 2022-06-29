package com.order.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.order.management.model.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer>{

}
