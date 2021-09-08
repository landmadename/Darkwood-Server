package com.dw.server.controllers;

import com.dw.server.mappers.tables.InnerFrames;
import com.dw.server.services.InnerFrameService;
import com.dw.server.services.InnerFrameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class InnerFrameController {
    @Autowired
    InnerFrameService innerFrameService;

    @PostMapping(value = "/create_inner_frame")
    public String createInnerFrame(
            @RequestParam("name")           String name,
            @RequestParam("prevImg")        MultipartFile prev,
            @RequestParam("color")          String color
    ){
        innerFrameService.createInnerFrame(name, prev, color);
        return "hi";
    }

    @PostMapping(value = "/update_inner_frame")
    public String updateInnerFrame(
            @RequestParam("id")             String id,
            @RequestParam("name")           String name,
            @RequestParam("prevImg")        MultipartFile prev,
            @RequestParam("color")          String color
    ){
        innerFrameService.updateInnerFrame(id, name, prev, color);
        return "hi";
    }

    @GetMapping(value = "/get_a_inner_frame")
    public InnerFrames getAInnerFrame(@RequestParam("id") String id){
        return innerFrameService.getAInnerFrame(id);
    }

    @GetMapping(value = "/delete_a_inner_frame")
    public String deleteAInnerFrame(@RequestParam("id") String id){
        innerFrameService.deleteAInnerFrame(id);
        return "hi";
    }
}
