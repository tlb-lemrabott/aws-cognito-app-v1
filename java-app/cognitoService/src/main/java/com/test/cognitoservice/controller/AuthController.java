package com.test.cognitoservice.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    @Value("${cognito.logout.url}")
    private String cognitoLogoutUrl;
    @Value("${cognito.client.id}")
    private String clientId;
    @Value("${cognito.logout.redirect.uri}")
    private String logoutRedirectUri;

    @GetMapping("/status")
    public Map<String, Object> checkAuthStatus(Authentication authentication) {
        return authentication != null && authentication.isAuthenticated()
                ? Map.of("authenticated", true, "user", authentication.getName())
                : Map.of("authenticated", false);
    }
    @PostMapping("/logout")
    public ResponseEntity<Void> logout(HttpServletRequest request, HttpServletResponse response) {
        String logoutUrl = UriComponentsBuilder
                .fromUri(URI.create(cognitoLogoutUrl))
                .queryParam("client_id", clientId)
                .queryParam("logout_uri", logoutRedirectUri)
                .toUriString();
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(URI.create(logoutUrl));
        return new ResponseEntity<>(headers, HttpStatus.FOUND);
    }

    @GetMapping("/userinfo")
    public ResponseEntity<Map<String, Object>> getUserInfo(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "User not authenticated"));
        }

        Map<String, Object> userDetails = Map.of(
                "username", authentication.getName(),
                "authorities", authentication.getAuthorities()
        );

        return ResponseEntity.ok(userDetails);
    }
}

