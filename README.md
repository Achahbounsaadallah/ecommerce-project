# E-commerce Project

This repository contains a full-stack e-commerce application with separate **frontend** and **backend** directories.

## Overview

- **Backend**: A Spring Boot application written in Java. Handles APIs, authentication, database access (MongoDB), and business logic.
- **Frontend**: A React application built with Vite and Tailwind CSS. Provides the user interface for browsing products, managing cart, authentication, and user profile.

## Backend Details

Located in the `backend/` folder.

- **Build**: Uses Maven. Run `./mvnw spring-boot:run` (or `mvnw.cmd` on Windows) to start the server.
- **Structure**:
  - `src/main/java/com/example/demo`: main package
  - `config`: configuration classes (MongoConfig, SecurityConfig)
  - `controller`: REST controllers (`AuthController`, `ProductController`, `CartController`, etc.)
  - `service`: service layer for business logic
  - `repository`: Spring Data repositories for MongoDB
  - `model`: domain entities (Product, User, Cart, CartItem)
  - `dto`: request/response transfer objects
  - `security`: authentication and JWT handling

- **Configuration**: `src/main/resources/application.properties` contains application settings (MongoDB connection, JWT secret, etc.).

- **Tests**: Located under `src/test/java` with basic application tests.

## Frontend Details

Located in the `frontend/` folder.

- **Technology**: React (JSX), Vite for build tooling, Tailwind CSS for styling.
- **Setup**: Run `npm install` to install dependencies. Start dev server with `npm run dev` or `yarn dev`.
- **Structure**:
  - `src/components`: reusable UI components (ProductCard, Header, Footer, etc.)
  - `src/pages`: top-level pages (Home, Cart, Login, Profile, etc.)
  - `src/data`: static data (products list)
  - `src/assets`: CSS files for styling specific parts of the site

- **Features**: product browsing, search, user login/signup, cart management, order page, profile settings.

## Running the Application

1. **Start Backend**:
   ```bash
   cd backend
   ./mvnw spring-boot:run   # or mvnw.cmd on Windows
   ```
2. **Start Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
3. The frontend will typically be available at `http://localhost:3000` and will communicate with the backend API (e.g., `http://localhost:8080`).

## Notes

- Ensure MongoDB is running and configured correctly in `application.properties`.
- JWT secrets and other sensitive settings should be managed securely for production.

## Contribution

Feel free to fork the repo and submit pull requests. Ensure to follow coding standards for both Java and JavaScript.

---

This README provides a high-level description of the project structure, setup, and how to run both frontend and backend components.