package com.dw.server.controllers;

import com.dw.server.mappers.tables.Cards;
import com.dw.server.mappers.tables.Frames;
import com.dw.server.mappers.tables.InnerFrames;
import com.dw.server.mappers.tables.Scenes;
import com.dw.server.services.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ApiController {
    @Autowired
    ApiService apiService;

    @GetMapping(value = "/api/frames")
    public List<Frames> getFrames(@RequestParam("shop") String shop){
        return apiService.getFrames(shop);
    }

    @GetMapping(value = "/api/cards")
    public List<Cards> getCards(@RequestParam("shop") String shop){
        return apiService.getCards(shop);
    }

    @GetMapping(value = "/api/scenes")
    public List<Scenes> getScenes(@RequestParam("shop") String shop){
        return apiService.getScenes(shop);
    }

    @GetMapping(value = "/api/inner_frames")
    public List<InnerFrames> getInnerFrames(@RequestParam("shop") String shop){
        return apiService.getInnerFrames(shop);
    }

}
