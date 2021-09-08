package com.dw.server.services;

import com.dw.server.mappers.InnerFramesMapper;
import com.dw.server.mappers.InnerFramesMapper;
import com.dw.server.mappers.tables.InnerFrames;
import com.dw.server.utils.SaveFiles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class InnerFrameService {
    @Autowired
    InnerFramesMapper innerFramesMapper;

    public void createInnerFrame(String name, MultipartFile prev, String color) {
        InnerFrames inner_frames = new InnerFrames();
        inner_frames.setUsername(SecurityContextHolder.getContext().getAuthentication().getName());
        inner_frames.setTitle(name);
        inner_frames.setPrevImg(SaveFiles.saveFile(prev));
        inner_frames.setColor(color);
        innerFramesMapper.insert(inner_frames);
    }

    public void updateInnerFrame(String id, String name, MultipartFile prev, String color) {
        InnerFrames inner_frames = new InnerFrames();
        inner_frames.setId(id);
        inner_frames.setTitle(name);
        inner_frames.setPrevImg(SaveFiles.saveFile(prev));
        inner_frames.setColor(color);
        innerFramesMapper.updateById(inner_frames);
    }

    public InnerFrames getAInnerFrame(String id) {
        return innerFramesMapper.selectById(id);
    }

    public void deleteAInnerFrame(String id) {
        innerFramesMapper.deleteById(id);
    }
}
