package com.example.demo.dto;

import com.example.demo.model.CartItem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CartResponse {
    private String cartId;
    private String userId;
    private List<CartItem> items;
    private double totalPrice;
    private int totalQuantity;
    private String message;
}
