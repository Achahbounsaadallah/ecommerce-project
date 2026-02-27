package com.example.demo.repository;
import com.example.demo.model.Product;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
    List<Product> findByCategory(String category);
    
    @Query("{ 'category': { $regex: ?0, $options: 'i' } }")
    List<Product> findByCategoryIgnoreCase(String category);
}

