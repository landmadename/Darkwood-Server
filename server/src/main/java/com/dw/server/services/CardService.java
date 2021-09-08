package com.dw.server.services;

import com.dw.server.mappers.CardsMapper;
import com.dw.server.mappers.tables.Cards;
import com.dw.server.mappers.tables.Frames;
import com.dw.server.utils.SaveFiles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class CardService {
    @Autowired
    CardsMapper cardsMapper;

    public void createCard(String name, MultipartFile prev, MultipartFile img) {
        Cards cards = new Cards();
        cards.setUsername(SecurityContextHolder.getContext().getAuthentication().getName());
        cards.setTitle(name);
        cards.setPrevImg(SaveFiles.saveFile(prev));
        cards.setImg(SaveFiles.saveFile(img));
        cardsMapper.insert(cards);
    }

    public void updateCard(String id, String name, MultipartFile prev, MultipartFile img) {
        Cards cards = new Cards();
        cards.setId(id);
        cards.setTitle(name);
        cards.setPrevImg(SaveFiles.saveFile(prev));
        cards.setImg(SaveFiles.saveFile(img));
        cardsMapper.updateById(cards);
    }

    public Cards getACard(String id) {
        return cardsMapper.selectById(id);
    }

    public void deleteACard(String id) {
        cardsMapper.deleteById(id);
    }
}
