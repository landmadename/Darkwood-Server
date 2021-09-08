package com.dw.server.services;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.dw.server.mappers.FramesMapper;
import com.dw.server.mappers.UserInfoMapper;
import com.dw.server.mappers.tables.Frames;
import com.dw.server.mappers.tables.UserInfo;
import com.dw.server.utils.SaveFiles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class AccountService {
    @Autowired
    UserInfoMapper userInfoMapper;

    public String updateUserInfo(
        String shopName,
        String shopAddress,
        String phoneNumber,
        String openingHours,
        String intro,
        MultipartFile cover,
        MultipartFile banner,
        MultipartFile[] workImages
    ){
        UserInfo userInfo = new UserInfo();
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        userInfo.setShopName(shopName);
        userInfo.setShopAddress(shopAddress);
        userInfo.setPhoneNumber(phoneNumber);
        userInfo.setOpeningHours(openingHours);
        userInfo.setIntro(intro);
        userInfo.setCover(SaveFiles.saveFile(cover));
        userInfo.setBanner(SaveFiles.saveFile(banner));
        userInfo.setWorkImages(SaveFiles.saveFiles(workImages));
        userInfoMapper.update(userInfo, new QueryWrapper<UserInfo>()
                .eq("username", username));
        return "hi";
    }

    public UserInfo getUserInfo() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userInfoMapper.selectOne(new QueryWrapper<UserInfo>()
                .eq("username", username));
    }
}