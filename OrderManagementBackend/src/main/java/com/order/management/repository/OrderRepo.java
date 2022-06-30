package com.order.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.order.management.model.Order;

@Repository
@Transactional
public interface OrderRepo extends JpaRepository<Order, Integer> {

}
