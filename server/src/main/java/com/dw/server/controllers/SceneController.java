package com.dw.server.controllers;

import com.dw.server.mappers.tables.Scenes;
import com.dw.server.services.SceneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class SceneController {
    @Autowired
    SceneService sceneService;

    @PostMapping(value = "/create_scene")
    public String createScene(
            @RequestParam("name")           String name,
            @RequestParam("prevImg")        MultipartFile prev,
            @RequestParam("img")            MultipartFile img
    ){
        sceneService.createScene(name, prev, img);
        return "hi";
    }

    @PostMapping(value = "/update_scene")
    public String updateScene(
            @RequestParam("id")             String id,
            @RequestParam("name")           String name,
            @RequestParam("prevImg")        MultipartFile prev,
            @RequestParam("img")            MultipartFile img
    ){
        sceneService.updateScene(id, name, prev, img);
        return "hi";
    }

    @GetMapping(value = "/get_a_scene")
    public Scenes getAScene(@RequestParam("id") String id){
        return sceneService.getAScene(id);
    }

    @GetMapping(value = "/delete_a_scene")
    public String deleteAScene(@RequestParam("id") String id){
        sceneService.deleteAScene(id);
        return "hi";
    }
}
