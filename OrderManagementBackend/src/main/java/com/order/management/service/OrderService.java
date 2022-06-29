package com.order.management.service;

import java.util.List;

import com.order.management.model.Order;

public interface OrderService {

	void newOrder(Order order);

	List<Order> getOrders();

	void updateOrder(Order order);

	void deleteOrder(Order order);

}
