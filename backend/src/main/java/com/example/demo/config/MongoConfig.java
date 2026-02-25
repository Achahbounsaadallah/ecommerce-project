package com.example.demo.config;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

@Configuration
public class MongoConfig {

    private static final String DATABASE_NAME = "Ecomerce_Site_With_Hamza";

    @Bean
    public MongoClient mongoClient() {
        // Force Spring to connect to this database
        return MongoClients.create("mongodb://localhost:27017");
    }

    @Bean
    public MongoTemplate mongoTemplate() {
        // Use the specific database
        return new MongoTemplate(mongoClient(), DATABASE_NAME);
    }
}
