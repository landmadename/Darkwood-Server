package com.dw.server.services;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.dw.server.mappers.CardsMapper;
import com.dw.server.mappers.FramesMapper;
import com.dw.server.mappers.InnerFramesMapper;
import com.dw.server.mappers.ScenesMapper;
import com.dw.server.mappers.tables.Cards;
import com.dw.server.mappers.tables.Frames;
import com.dw.server.mappers.tables.InnerFrames;
import com.dw.server.mappers.tables.Scenes;
import com.dw.server.objects.BrowserDTO;
import com.dw.server.objects.BrowserItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
public class BrowserService {
    @Autowired
    FramesMapper framesMapper;
    @Autowired
    CardsMapper cardsMapper;
    @Autowired
    ScenesMapper scenesMapper;
    @Autowired
    InnerFramesMapper innerFramesMapper;

    public BrowserDTO getBrowserPage(String type, int page){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        switch (type){
            case "frames":
                IPage<Frames> frames = framesMapper.selectPage(new Page<>(page,10),new QueryWrapper<Frames>()
                        .eq("username", username)
                        .orderByDesc("last_time"));
                return packFramesIntoBrowserDTO(frames.getRecords(), page, frames.getPages());
            case "cards":
                IPage<Cards> cards = cardsMapper.selectPage(new Page<>(page,10),new QueryWrapper<Cards>()
                        .eq("username", username)
                        .orderByDesc("last_time"));
                return packCardsIntoBrowserDTO(cards.getRecords(), page, cards.getPages());
            case "scenes":
                IPage<Scenes> scenes = scenesMapper.selectPage(new Page<>(page,10),new QueryWrapper<Scenes>()
                        .eq("username", username)
                        .orderByDesc("last_time"));
                return packScenesIntoBrowserDTO(scenes.getRecords(), page, scenes.getPages());
            case "innerFrames":
                IPage<InnerFrames> innerFrames = innerFramesMapper.selectPage(new Page<>(page,10),new QueryWrapper<InnerFrames>()
                        .eq("username", username)
                        .orderByDesc("last_time"));
                return packInnerFramesIntoBrowserDTO(innerFrames.getRecords(), page, innerFrames.getPages());
        }
        return null;
    }

    public BrowserDTO getSearchPage(String wd, String type, int page){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        switch (type){
            case "frames":
                IPage<Frames> frames = framesMapper.selectPage(new Page<>(page,10),new QueryWrapper<Frames>()
                        .like("title", wd)
                        .eq("username", username)
                        .orderByDesc("last_time"));
                return packFramesIntoBrowserDTO(frames.getRecords(), page, frames.getPages());
            case "cards":
                IPage<Cards> cards = cardsMapper.selectPage(new Page<>(page,10),new QueryWrapper<Cards>()
                        .like("title", wd)
                        .eq("username", username)
                        .orderByDesc("last_time"));
                return packCardsIntoBrowserDTO(cards.getRecords(), page, cards.getPages());
            case "scenes":
                IPage<Scenes> scenes = scenesMapper.selectPage(new Page<>(page,10),new QueryWrapper<Scenes>()
                        .like("title", wd)
                        .eq("username", username)
                        .orderByDesc("last_time"));
                return packScenesIntoBrowserDTO(scenes.getRecords(), page, scenes.getPages());
            case "innerFrames":
                IPage<InnerFrames> innerFrames = innerFramesMapper.selectPage(new Page<>(page,10),new QueryWrapper<InnerFrames>()
                        .like("title", wd)
                        .eq("username", username)
                        .orderByDesc("last_time"));
                return packInnerFramesIntoBrowserDTO(innerFrames.getRecords(), page, innerFrames.getPages());
        }
        return null;
    }

    private BrowserDTO packInnerFramesIntoBrowserDTO(List<InnerFrames> innerFrames, Integer currentPage, Long pageCount) {
        BrowserDTO browserDTO = new BrowserDTO();
        List<BrowserItem> browserItems = new ArrayList<>();

        for (InnerFrames innerFrame :
                innerFrames) {
            BrowserItem browserItem = new BrowserItem();
            browserItem.setId(innerFrame.getId());
            browserItem.setTitle(innerFrame.getTitle());
            browserItem.setPrevImg(innerFrame.getPrevImg());
            browserItems.add(browserItem);
        }
        browserDTO.setCurrentPage(currentPage);
        browserDTO.setPageCount(pageCount);
        browserDTO.setBrowserItems(browserItems);
        return browserDTO;

    }

    private BrowserDTO packScenesIntoBrowserDTO(List<Scenes> scenes, Integer currentPage, Long pageCount) {
        BrowserDTO browserDTO = new BrowserDTO();
        List<BrowserItem> browserItems = new ArrayList<>();

        for (Scenes scene :
                scenes) {
            BrowserItem browserItem = new BrowserItem();
            browserItem.setId(scene.getId());
            browserItem.setTitle(scene.getTitle());
            browserItem.setPrevImg(scene.getPrevImg());
            browserItems.add(browserItem);
        }
        browserDTO.setCurrentPage(currentPage);
        browserDTO.setPageCount(pageCount);
        browserDTO.setBrowserItems(browserItems);
        return browserDTO;

    }

    private BrowserDTO packCardsIntoBrowserDTO(List<Cards> cards, Integer currentPage, Long pageCount) {
        BrowserDTO browserDTO = new BrowserDTO();
        List<BrowserItem> browserItems = new ArrayList<>();

        for (Cards card :
                cards) {
            BrowserItem browserItem = new BrowserItem();
            browserItem.setId(card.getId());
            browserItem.setTitle(card.getTitle());
            browserItem.setPrevImg(card.getPrevImg());
            browserItems.add(browserItem);
        }
        browserDTO.setCurrentPage(currentPage);
        browserDTO.setPageCount(pageCount);
        browserDTO.setBrowserItems(browserItems);
        return browserDTO;

    }

    public BrowserDTO packFramesIntoBrowserDTO(List<Frames> frames, Integer currentPage, Long pageCount){
        BrowserDTO browserDTO = new BrowserDTO();
        List<BrowserItem> browserItems = new ArrayList<>();

        for (Frames frame :
                frames) {
            BrowserItem browserItem = new BrowserItem();
            browserItem.setId(frame.getId());
            browserItem.setTitle(frame.getTitle());
            browserItem.setPrevImg(frame.getPrevImg());
            browserItems.add(browserItem);
        }
        browserDTO.setCurrentPage(currentPage);
        browserDTO.setPageCount(pageCount);
        browserDTO.setBrowserItems(browserItems);
        return browserDTO;
    }
}
