package com.dw.server.services;

import com.dw.server.mappers.CardsMapper;
import com.dw.server.mappers.FramesMapper;
import com.dw.server.mappers.InnerFramesMapper;
import com.dw.server.mappers.ScenesMapper;
import com.dw.server.mappers.tables.Cards;
import com.dw.server.mappers.tables.Frames;
import com.dw.server.mappers.tables.InnerFrames;
import com.dw.server.mappers.tables.Scenes;
import com.dw.server.utils.SaveFiles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ApiService {
    @Autowired
    FramesMapper framesMapper;
    @Autowired
    CardsMapper cardsMapper;
    @Autowired
    ScenesMapper scenesMapper;
    @Autowired
    InnerFramesMapper innerFramesMapper;

    public List<Frames> getFrames(String shop) {
        Map<String,Object> columnMap = new HashMap<>();
        columnMap.put("username",shop);
        return framesMapper.selectByMap(columnMap);
    }

    public List<Cards> getCards(String shop) {
        Map<String,Object> columnMap = new HashMap<>();
        columnMap.put("username",shop);
        return cardsMapper.selectByMap(columnMap);
    }

    public List<Scenes> getScenes(String shop) {
        Map<String,Object> columnMap = new HashMap<>();
        columnMap.put("username",shop);
        return scenesMapper.selectByMap(columnMap);
    }

    public List<InnerFrames> getInnerFrames(String shop) {
        Map<String,Object> columnMap = new HashMap<>();
        columnMap.put("username",shop);
        return innerFramesMapper.selectByMap(columnMap);
    }
}