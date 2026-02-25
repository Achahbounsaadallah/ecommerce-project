package com.example.demo.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

@Data
public class ProductRequestDTO {
    @NotBlank
    private String name;

    private String description;

    @Positive
    private double price;

    @PositiveOrZero
    private int quantity;

    private String category;
}
