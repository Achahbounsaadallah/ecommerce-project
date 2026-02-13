package com.example.demo.controller;
import com.example.demo.dto.ProductRequestDTO;
import com.example.demo.model.Product;
import com.example.demo.service.ProductService;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import jakarta.validation.Valid;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Product> addProduct(
            @Valid @RequestBody ProductRequestDTO dto) {

        Product product = productService.addProduct(dto);

        return ResponseEntity.status(HttpStatus.CREATED).body(product);
    }
}
