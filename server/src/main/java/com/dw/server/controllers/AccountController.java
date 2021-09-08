package com.dw.server.controllers;

import com.dw.server.mappers.tables.Frames;
import com.dw.server.mappers.tables.UserInfo;
import com.dw.server.services.AccountService;
import com.dw.server.services.FrameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class AccountController {
    @Autowired
    AccountService accountService;

    @PostMapping(value = "/update_user_info")
    public String updateUserInfo(
            @RequestParam("shopName")       String shopName,
            @RequestParam("shopAddress")    String shopAddress,
            @RequestParam("phoneNumber")    String phoneNumber,
            @RequestParam("openingHours")   String openingHours,
            @RequestParam("intro")          String intro,
            @RequestParam("cover")          MultipartFile cover,
            @RequestParam("banner")         MultipartFile banner,
            @RequestParam("workImages")     MultipartFile[] workImages
    ){
        accountService.updateUserInfo(shopName, shopAddress, phoneNumber, openingHours, intro, cover, banner, workImages);
        return "hi";
    }

    @GetMapping(value = "/get_user_info")
    public UserInfo getUserInfo(){
        return accountService.getUserInfo();
    }
}
