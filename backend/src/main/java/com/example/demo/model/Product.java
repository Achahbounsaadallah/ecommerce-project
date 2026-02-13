package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "products")
@Data
public class Product {

    @Id
    private String id;

    private String name;
    private String description;
    private double price;
    private int quantity;
}

