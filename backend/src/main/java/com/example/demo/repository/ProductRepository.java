package com.example.demo.repository;
import com.example.demo.model.Product;


public interface ProductRepository extends org.springframework.data.mongodb.repository.MongoRepository<Product, String> {
    
}
