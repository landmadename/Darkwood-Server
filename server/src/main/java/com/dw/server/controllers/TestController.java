package com.dw.server.controllers;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @PostMapping(value = "/test")
    public String testTest(){
        System.out.println(SecurityContextHolder.getContext().getAuthentication().getName());
        return "hi";
    }
}
