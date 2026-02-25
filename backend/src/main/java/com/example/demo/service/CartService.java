package com.example.demo.service;

import com.example.demo.dto.AddToCartRequest;
import com.example.demo.dto.CartResponse;
import com.example.demo.dto.UpdateCartItemRequest;
import com.example.demo.model.Cart;
import com.example.demo.model.CartItem;
import com.example.demo.model.Product;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class CartService {
    
    @Autowired
    private CartRepository cartRepository;
    
    @Autowired
    private ProductRepository productRepository;
    
    /**
     * Obtenir le panier de l'utilisateur ou créer un nouveau
     */
    private Cart getOrCreateCart(String userId) {
        Optional<Cart> existingCart = cartRepository.findByUserId(userId);
        
        if (existingCart.isPresent()) {
            return existingCart.get();
        }
        
        Cart newCart = new Cart();
        newCart.setUserId(userId);
        newCart.setCreatedAt(LocalDateTime.now());
        newCart.setUpdatedAt(LocalDateTime.now());
        return cartRepository.save(newCart);
    }
    
    /**
     * Ajouter un produit au panier
     */
    public CartResponse addToCart(String userId, AddToCartRequest request) {
        // Vérifier que le produit existe
        Optional<Product> product = productRepository.findById(request.getProductId());
        if (product.isEmpty()) {
            throw new RuntimeException("Produit non trouvé");
        }
        
        // Vérifier la quantité disponible
        if (product.get().getQuantity() < request.getQuantity()) {
            throw new RuntimeException("Stock insuffisant");
        }
        
        Cart cart = getOrCreateCart(userId);
        
        // Vérifier si le produit est déjà dans le panier
        CartItem existingItem = cart.getItems().stream()
                .filter(item -> item.getProductId().equals(request.getProductId()))
                .findFirst()
                .orElse(null);
        
        if (existingItem != null) {
            // Augmenter la quantité
            existingItem.setQuantity(existingItem.getQuantity() + request.getQuantity());
        } else {
            // Ajouter un nouvel article
            CartItem newItem = new CartItem();
            newItem.setProductId(product.get().getId());
            newItem.setProductName(product.get().getName());
            newItem.setPrice(product.get().getPrice());
            newItem.setQuantity(request.getQuantity());
            cart.getItems().add(newItem);
        }
        
        cart.setUpdatedAt(LocalDateTime.now());
        cart = cartRepository.save(cart);
        
        return convertToResponse(cart, "Produit ajouté au panier avec succès");
    }
    
    /**
     * Supprimer un produit du panier
     */
    public CartResponse removeFromCart(String userId, String productId) {
        Cart cart = getOrCreateCart(userId);
        
        boolean removed = cart.getItems().removeIf(item -> item.getProductId().equals(productId));
        
        if (!removed) {
            throw new RuntimeException("Produit non trouvé dans le panier");
        }
        
        cart.setUpdatedAt(LocalDateTime.now());
        cart = cartRepository.save(cart);
        
        return convertToResponse(cart, "Produit supprimé du panier");
    }
    
    /**
     * Modifier la quantité d'un produit
     */
    public CartResponse updateQuantity(String userId, UpdateCartItemRequest request) {
        Cart cart = getOrCreateCart(userId);
        
        if (request.getQuantity() <= 0) {
            throw new RuntimeException("La quantité doit être supérieure à 0");
        }
        
        // Vérifier le stock disponible
        Optional<Product> product = productRepository.findById(request.getProductId());
        if (product.isEmpty()) {
            throw new RuntimeException("Produit non trouvé");
        }
        
        if (product.get().getQuantity() < request.getQuantity()) {
            throw new RuntimeException("Stock insuffisant");
        }
        
        CartItem cartItem = cart.getItems().stream()
                .filter(item -> item.getProductId().equals(request.getProductId()))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Article non trouvé dans le panier"));
        
        cartItem.setQuantity(request.getQuantity());
        
        cart.setUpdatedAt(LocalDateTime.now());
        cart = cartRepository.save(cart);
        
        return convertToResponse(cart, "Quantité mise à jour avec succès");
    }
    
    /**
     * Voir le panier de l'utilisateur
     */
    public CartResponse getCart(String userId) {
        Cart cart = getOrCreateCart(userId);
        return convertToResponse(cart, null);
    }
    
    /**
     * Vider le panier
     */
    public CartResponse clearCart(String userId) {
        Cart cart = getOrCreateCart(userId);
        cart.getItems().clear();
        cart.setUpdatedAt(LocalDateTime.now());
        cart = cartRepository.save(cart);
        
        return convertToResponse(cart, "Panier vidé avec succès");
    }
    
    /**
     * Convertir le Cart en CartResponse
     */
    private CartResponse convertToResponse(Cart cart, String message) {
        return CartResponse.builder()
                .cartId(cart.getId())
                .userId(cart.getUserId())
                .items(cart.getItems())
                .totalPrice(cart.getTotalPrice())
                .totalQuantity(cart.getTotalQuantity())
                .message(message)
                .build();
    }
}
