package com.order.management.service;

import java.util.List;

import com.order.management.model.Order;
import com.order.management.model.Product;

public interface OrderService {
	
//	ORDER

	List<Order> getOrders(); //working

	void newOrder(Order order); //working

	void updateOrder(Order order); //obsolete

	void deleteOrder(Order order); //contingent upon custom jpa method
	
//	PRODUCT

	List<Product> getProductsByOrder(Order order); //working :)

	void newProduct(Product product);

	void updateProduct(Product product);

	void deleteProduct(Product product);

}
