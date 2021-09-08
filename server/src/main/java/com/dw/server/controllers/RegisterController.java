package com.dw.server.controllers;

import com.dw.server.objects.UserDTO;
import com.dw.server.services.RegisterService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class RegisterController {
    @Autowired
    private RegisterService registerService;
    @PostMapping(value = "/register")
    public String register(@RequestBody UserDTO userDTO) {
        int registerCode = registerService.register(userDTO);
        switch (registerCode){
            case RegisterService.SUCCESS:
                log.info("用户注册成功");
                return "{status: 用户注册成功}";
            case RegisterService.FAILED:
                log.info("用户注册失败");
                return "注册成功";
            case RegisterService.NOT_VALID:
                log.info("用户名密码不规范");
                return "用户名密码不规范";
            case RegisterService.EXIST:
                log.info("用户已经注册过了");
                return "用户已经注册过了";
            default:
                log.info("出错啦");
                return "出错啦";
        }
    }
}
