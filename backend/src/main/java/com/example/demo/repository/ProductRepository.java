package com.example.demo.repository;
import com.example.demo.model.Product;
import java.util.List;

public interface ProductRepository extends org.springframework.data.mongodb.repository.MongoRepository<Product, String> {
    List<Product> findByCategory(String category);
}
