package com.dw.server.services;

import com.dw.server.mappers.UserMapper;
import com.dw.server.objects.UserDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

@Service
@Slf4j
public class RegisterService {

    @Resource
    private UserMapper userMapper;

    public final static int SUCCESS = 1;
    public final static int NOT_VALID = 2;
    public final static int EXIST = 3;
    public final static int FAILED = 4;

    public int register(UserDTO userDTO){
        if (checkNotValid(userDTO)){
            return NOT_VALID;
        }else if (checkExist(userDTO)){
            return EXIST;
        }else if (saveUser(userDTO)){
            return SUCCESS;
        }else {
            return FAILED;
        }

    }

    public boolean saveUser(UserDTO userDTO){
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        String password = bCryptPasswordEncoder.encode(userDTO.password);
        userDTO.password = password;
        try {
            userMapper.createUser(userDTO);
            return true;
        } catch (Exception e){
            log.error(e.toString());
            return false;
        }

    }

    public boolean checkNotValid(UserDTO userDTO){
        if (userDTO.username.length()<8 && userDTO.username.length()>20){
            return true;
        }
        if (userDTO.password.length()<8 && userDTO.password.length()>20){
            return true;
        }
        return false;
    }

    public boolean checkExist(UserDTO userDTO){
        if (userMapper.countUser(userDTO) == 0){
            return false;
        }else {
            return true;
        }
    }
}
