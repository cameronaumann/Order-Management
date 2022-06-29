package com.order.management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.order.management.model.Order;
import com.order.management.service.OrderService;

@RestController
public class OrderController {
	
//	@Autowired
	private OrderService service;
	
	@Autowired
	public OrderController(OrderService service) {
		this.service = service;
	}
	
	@PostMapping("/newOrder")
	@ResponseStatus(HttpStatus.CREATED)
	public void newOrder(@RequestBody Order order) {
		if (order.getId() == 0 || order.getProducts() == null) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing order details");
		} else {
			service.newOrder(order);
		}
	}
	
	@GetMapping("/getOrders")
	@ResponseStatus(HttpStatus.OK)
	public List<Order> getOrders() {
		return service.getOrders();
	}
	
	@PutMapping("/updateOrder")
	@ResponseStatus(HttpStatus.OK)
	public void updateOrder(@RequestBody Order order) {
		if (order.getId() == 0 || order.getCreated() == null || order.getProducts() == null) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing order details");
		} else {
			service.updateOrder(order);
		}
	}
	
	@PutMapping("/deleteOrder")
	@ResponseStatus(HttpStatus.OK)
	public void deleteOrder(@RequestBody Order order) {
		if (order.getId() == 0 || order.getCreated() == null || order.getProducts() == null) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing order details");
		} else {
			service.deleteOrder(order);
		}
	}
}
