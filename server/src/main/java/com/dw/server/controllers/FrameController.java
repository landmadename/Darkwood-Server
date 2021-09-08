package com.dw.server.controllers;

import com.dw.server.mappers.tables.Frames;
import com.dw.server.services.FrameService;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class FrameController {
    @Autowired
    FrameService frameService;

    @PostMapping(value = "/create_frame")
    public String createFrame(
            @RequestParam("name")           String name,
            @RequestParam("content")        String content,
            @RequestParam("width")          Double width,
            @RequestParam("bottom")         MultipartFile bottom,
            @RequestParam("right")          MultipartFile right,
            @RequestParam("prev")           MultipartFile prev,
            @RequestParam("contentImages")  MultipartFile[] contentImages,
            @RequestParam("historyImages")  MultipartFile[] historyImages
    ){
        frameService.createFrame(name, content, width, bottom, right, prev, contentImages, historyImages);
        return "hi";
    }

    @PostMapping(value = "/update_frame")
    public String updateFrame(
            @RequestParam("id")             String id,
            @RequestParam("name")           String name,
            @RequestParam("content")        String content,
            @RequestParam("width")          Double width,
            @RequestParam("contentImages")  MultipartFile[] contentImages,
            @RequestParam("historyImages")  MultipartFile[] historyImages
    ){
        frameService.updateFrame(id, name, content, width, contentImages, historyImages);
        return "hi";
    }

    @GetMapping(value = "/get_a_frame")
    public Frames getAFrame(@RequestParam("id") String id){
        return frameService.getAFrame(id);
    }

    @GetMapping(value = "/delete_a_frame")
    public String deleteAFrame(@RequestParam("id") String id){
        frameService.deleteAFrame(id);
        return "hi";
    }
}
