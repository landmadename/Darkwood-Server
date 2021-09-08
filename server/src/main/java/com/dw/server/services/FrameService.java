package com.dw.server.services;

import com.dw.server.mappers.FramesMapper;
import com.dw.server.mappers.tables.Frames;
import com.dw.server.utils.SaveFiles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FrameService {
    @Autowired
    FramesMapper framesMapper;

    public String createFrame(
        String name,
        String content,
        Double width,
        MultipartFile bottom,
        MultipartFile right,
        MultipartFile prev,
        MultipartFile[] contentImages,
        MultipartFile[] historyImages
    ){
        Frames frames = new Frames();
        frames.setUsername(SecurityContextHolder.getContext().getAuthentication().getName());
        frames.setTitle(name);
        frames.setContent(content);
        frames.setWidth(width);
        frames.setBottomImg(SaveFiles.saveFile(bottom));
        frames.setRightImg(SaveFiles.saveFile(right));
        frames.setPrevImg(SaveFiles.saveFile(prev));
        frames.setContentImages(SaveFiles.saveFiles(contentImages));
        frames.setHistoryImages(SaveFiles.saveFiles(historyImages));
        System.out.println(frames);
        framesMapper.insert(frames);
        return "hi";
    }

    public Frames getAFrame(String id){
        return framesMapper.selectById(id);
    }

    public int updateFrame(
            String id,
            String name,
            String content,
            Double width,
            MultipartFile[] contentImages,
            MultipartFile[] historyImages
    ) {
        Frames frames = new Frames();
        frames.setId(id);
        frames.setTitle(name);
        frames.setContent(content);
        frames.setWidth(width);
        frames.setContentImages(SaveFiles.saveFiles(contentImages));
        frames.setHistoryImages(SaveFiles.saveFiles(historyImages));
        return framesMapper.updateById(frames);
    }

    public String deleteAFrame(String id) {
        framesMapper.deleteById(id);
        return "hi";
    }
}