package com.order.management.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.order.management.model.Order;
import com.order.management.model.Product;
import com.order.management.repository.OrderRepo;
import com.order.management.repository.ProductRepo;

@Service
public class OrderServiceImpl implements OrderService {
	
	private OrderRepo repo;
	private ProductRepo productRepo;
	
	@Autowired
	public OrderServiceImpl(OrderRepo repo, ProductRepo productRepo) {
		this.repo = repo;
		this.productRepo = productRepo;
	}
	
//	PRODUCT------------------------------------------

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
	
//	ORDER---------------------------------------

	@Override
	public void getProductsByOrder(Order order) {
		repo.g
		
	}

	@Override
	public void newProduct(Product product) {
		productRepo.save(product);
		
	}

	@Override
	public void updateProduct(Product product) {
		productRepo.save(product);
	}

	@Override
	public void deleteProduct(Product product) {
		productRepo.delete(product);
	}
	
	
}
