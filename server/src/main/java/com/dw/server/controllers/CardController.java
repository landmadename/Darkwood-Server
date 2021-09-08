package com.dw.server.controllers;

import com.dw.server.mappers.tables.Cards;
import com.dw.server.mappers.tables.Frames;
import com.dw.server.services.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class CardController {
    @Autowired
    CardService cardService;

    @PostMapping(value = "/create_card")
    public String createCard(
            @RequestParam("name")           String name,
            @RequestParam("prevImg")        MultipartFile prev,
            @RequestParam("img")            MultipartFile img
    ){
        cardService.createCard(name, prev, img);
        return "hi";
    }

    @PostMapping(value = "/update_card")
    public String updateCard(
            @RequestParam("id")             String id,
            @RequestParam("name")           String name,
            @RequestParam("prevImg")        MultipartFile prev,
            @RequestParam("img")            MultipartFile img
    ){
        cardService.updateCard(id, name, prev, img);
        return "hi";
    }

    @GetMapping(value = "/get_a_card")
    public Cards getACard(@RequestParam("id") String id){
        return cardService.getACard(id);
    }

    @GetMapping(value = "/delete_a_card")
    public String deleteACard(@RequestParam("id") String id){
        cardService.deleteACard(id);
        return "hi";
    }
}
