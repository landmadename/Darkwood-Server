package com.dw.server.services;

import com.dw.server.mappers.ScenesMapper;
import com.dw.server.mappers.tables.Scenes;
import com.dw.server.utils.SaveFiles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class SceneService {
    @Autowired
    ScenesMapper scenesMapper;

    public void createScene(String name, MultipartFile prev, MultipartFile img) {
        Scenes scenes = new Scenes();
        scenes.setUsername(SecurityContextHolder.getContext().getAuthentication().getName());
        scenes.setTitle(name);
        scenes.setPrevImg(SaveFiles.saveFile(prev));
        scenes.setImg(SaveFiles.saveFile(img));
        scenesMapper.insert(scenes);
    }

    public void updateScene(String id, String name, MultipartFile prev, MultipartFile img) {
        Scenes scenes = new Scenes();
        scenes.setId(id);
        scenes.setTitle(name);
        scenes.setPrevImg(SaveFiles.saveFile(prev));
        scenes.setImg(SaveFiles.saveFile(img));
        scenesMapper.updateById(scenes);
    }

    public Scenes getAScene(String id) {
        return scenesMapper.selectById(id);
    }

    public void deleteAScene(String id) {
        scenesMapper.deleteById(id);
    }
}
