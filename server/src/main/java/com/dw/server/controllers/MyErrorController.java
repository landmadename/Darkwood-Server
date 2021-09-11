package com.dw.server.controllers;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class MyErrorController implements ErrorController {

    @RequestMapping("/error")
    @ResponseBody
    public RedirectView handleError(RedirectAttributes attributes) {
        return new RedirectView("/");
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}