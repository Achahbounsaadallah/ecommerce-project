package com.example.demo.controller;

import com.example.demo.dto.AddToCartRequest;
import com.example.demo.dto.CartResponse;
import com.example.demo.dto.UpdateCartItemRequest;
import com.example.demo.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "*")
public class CartController {
    
    @Autowired
    private CartService cartService;
    
    /**
     * Ajouter un produit au panier
     * POST /api/cart/add
     */
    @PostMapping("/add")
    public ResponseEntity<CartResponse> addToCart(
            @RequestBody AddToCartRequest request,
            Authentication authentication) {
        try {
            String userId = authentication != null ? authentication.getName() : "anonymous_user";
            CartResponse response = cartService.addToCart(userId, request);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            CartResponse errorResponse = new CartResponse();
            errorResponse.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
    
    /**
     * Supprimer un produit du panier
     * DELETE /api/cart/remove/{productId}
     */
    @DeleteMapping("/remove/{productId}")
    public ResponseEntity<CartResponse> removeFromCart(
            @PathVariable String productId,
            Authentication authentication) {
        try {
            String userId = authentication != null ? authentication.getName() : "anonymous_user";
            CartResponse response = cartService.removeFromCart(userId, productId);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            CartResponse errorResponse = new CartResponse();
            errorResponse.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
    
    /**
     * Modifier la quantité d'un produit
     * PUT /api/cart/update
     */
    @PutMapping("/update")
    public ResponseEntity<CartResponse> updateQuantity(
            @RequestBody UpdateCartItemRequest request,
            Authentication authentication) {
        try {
            String userId = authentication != null ? authentication.getName() : "anonymous_user";
            CartResponse response = cartService.updateQuantity(userId, request);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            CartResponse errorResponse = new CartResponse();
            errorResponse.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
    
    /**
     * Voir le panier
     * GET /api/cart
     */
    @GetMapping
    public ResponseEntity<CartResponse> getCart(Authentication authentication) {
        try {
            String userId = authentication != null ? authentication.getName() : "anonymous_user";
            CartResponse response = cartService.getCart(userId);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            CartResponse errorResponse = new CartResponse();
            errorResponse.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
    
    /**
     * Vider le panier
     * DELETE /api/cart/clear
     */
    @DeleteMapping("/clear")
    public ResponseEntity<CartResponse> clearCart(Authentication authentication) {
        try {
            String userId = authentication != null ? authentication.getName() : "anonymous_user";
            CartResponse response = cartService.clearCart(userId);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            CartResponse errorResponse = new CartResponse();
            errorResponse.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
}
