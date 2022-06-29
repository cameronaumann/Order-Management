package com.order.management.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.order.management.model.Order;
import com.order.management.repository.OrderRepo;

@Service
public class OrderServiceImpl implements OrderService {
	
	private OrderRepo repo;
	
	@Autowired
	public OrderServiceImpl(OrderRepo repo) {
		this.repo = repo;
	}

	@Override
	public void newOrder(Order order) {
		order.setCreated(LocalDateTime.now());
		repo.save(order);
		
	}

	@Override
	public List<Order> getOrders() {
		return repo.findAll();
	}

	@Override
	public void updateOrder(Order order) {
		repo.save(order); //this might need to be changed, documentation says save also acts as a merge
	}

	@Override
	public void deleteOrder(Order order) {
		repo.delete(order);
		
	}
	
}
