package com.order.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.order.management.model.Order;

@Repository
public interface OrderRepo extends JpaRepository<Order, Integer>{

}
