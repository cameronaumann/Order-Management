package com.order.management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.order.management.model.Order;
import com.order.management.model.Product;
import com.order.management.service.OrderService;

@RestController
public class OrderController {
	
	private OrderService service;
	
	@Autowired
	public OrderController(OrderService service) {
		this.service = service;
	}
	
	
//	-------------------------------------------ORDERS-------------------------------------------------------
	@GetMapping("/orders") //working
	@ResponseStatus(HttpStatus.OK)
	public List<Order> getOrders() {
		return service.getOrders();
	}
	
	@PostMapping("/orders/new") //working
	@ResponseStatus(HttpStatus.CREATED)
	public void newOrder(/*@RequestBody Order order*/) {
		service.newOrder(new Order());
//		service.newOrder(order);
	}
	
	@Deprecated //no need to update the order ; obsolete
	@PutMapping("/orders/update")
	@ResponseStatus(HttpStatus.OK)
	public void updateOrder(@RequestBody Order order) {
		if (order.getId() == 0 || order.getCreated() == null) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing order details");
		} else {
			service.updateOrder(order);
		}
	}
	
	@DeleteMapping("/orders/delete") //working
	@ResponseStatus(HttpStatus.OK)
	public void deleteOrder(@RequestBody Order order) {
		if (order.getId() == 0) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing order details");
		} else {
			service.deleteOrder(order);
		}
	}
//	-------------------------------------------PRODUCTS-------------------------------------------------------
	@GetMapping("/products") //working
	@ResponseStatus(HttpStatus.OK)
	public List<Product> getProductsByOrder(@RequestBody Order order) {
		if (order.getId() == 0 || order.getId() == null || order.getCreated() == null) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing order details");
		}
		return service.getProductsByOrder(order);
	}
	
	
	@PostMapping("/products/new") //working send id as a child of order within the product json
	@ResponseStatus(HttpStatus.CREATED)
	public void addProduct(@RequestBody Product product) {
		if (product.getName() == null || product.getPrice() == 0 || product.getManufacturer() == null || product.getManufacturer() == "") {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing product details");
		} else {
			service.newProduct(product);
		}
	}
	
	@PutMapping("/products/update") //working 
	@ResponseStatus(HttpStatus.OK)
	public void updateProduct(@RequestBody Product product) {
		if (product.getId() == 0 || product.getId() == null || product.getName() == null || product.getPrice() == 0 || product.getManufacturer() == null || product.getManufacturer() == "") {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing product details");
		} else {
			service.updateProduct(product);
		}
	}
	
	@DeleteMapping("/products/delete") //working
	@ResponseStatus(HttpStatus.OK)
	public void deleteProduct(@RequestBody Product product) {
		if (product.getId() == 0 || product.getId() == null || product.getName() == null || product.getPrice() == 0 || product.getManufacturer() == null || product.getManufacturer() == "") {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing product details");
		} else {
			service.deleteProduct(product);
		}
	}
	
}
