package com.dw.server.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @GetMapping(value = "/get_me")
    public String getMe(){
        return "logged in";
    }
}
