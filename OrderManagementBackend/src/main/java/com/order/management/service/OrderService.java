package com.order.management.service;

import java.util.List;

import com.order.management.model.Order;
import com.order.management.model.Product;

public interface OrderService {
	
//	ORDER

	void newOrder(Order order);

	List<Order> getOrders();

	void updateOrder(Order order);

	void deleteOrder(Order order);
	
//	PRODUCT

	void getProductsByOrder(Order order);

	void newProduct(Product product);

	void updateProduct(Product product);

	void deleteProduct(Product product);

}
