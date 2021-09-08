package com.dw.server.mappers;

import com.dw.server.objects.UserDTO;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {
    void createUser(UserDTO userDTO);
    int countUser(UserDTO userDTO);
    String getPasswordByUsername(String username);
    String getAuthorityByUsername(String username);
}
