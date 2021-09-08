package com.dw.server.controllers;

import com.dw.server.objects.BrowserDTO;
import com.dw.server.services.BrowserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BrowserController {
    @Autowired
    BrowserService browserService;

    @GetMapping(value = "/browser")
    public BrowserDTO browser(String type, Integer page){
        return browserService.getBrowserPage(type, page);
    }

    @GetMapping(value = "/search")
    public BrowserDTO search(String wd, String type, Integer page){
        return browserService.getSearchPage(wd, type, page);
    }
}
