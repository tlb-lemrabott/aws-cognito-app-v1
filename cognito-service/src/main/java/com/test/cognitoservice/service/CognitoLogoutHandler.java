package com.test.cognitoservice.service;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.SimpleUrlLogoutSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.nio.charset.StandardCharsets;
@Service
public class CognitoLogoutHandler extends SimpleUrlLogoutSuccessHandler {
    @Value("${cognito.domain}")
    private String domain;
    @Value("${cognito.logout.redirect.uri}")
    private String logoutRedirectUri;
    @Value("${cognito.client.id}")
    private String clientId;
    @Override
    protected String determineTargetUrl(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        System.out.println("logoutRedirectUri = " + logoutRedirectUri);
        return UriComponentsBuilder
                .fromUri(URI.create(domain + "/logout"))
                .queryParam("client_id", clientId)
                .queryParam("logout_uri", logoutRedirectUri)
                .encode(StandardCharsets.UTF_8)
                .build()
                .toUriString();
    }
}