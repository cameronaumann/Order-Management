package com.order.management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class OrderManagementBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderManagementBackendApplication.class, args);
	}

}
