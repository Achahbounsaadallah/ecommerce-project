package com.example.demo.security;

import org.springframework.stereotype.Component;

@Component
public class AuthEntryPointJwt implements org.springframework.security.web.AuthenticationEntryPoint {
    
    @Override
    public void commence(jakarta.servlet.http.HttpServletRequest request,
                         jakarta.servlet.http.HttpServletResponse response,
                         org.springframework.security.core.AuthenticationException authException)
            throws java.io.IOException, jakarta.servlet.ServletException {
        response.sendError(jakarta.servlet.http.HttpServletResponse.SC_UNAUTHORIZED, "Error: Unauthorized");
    }
    
}
