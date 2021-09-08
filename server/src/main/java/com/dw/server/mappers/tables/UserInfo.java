package com.dw.server.mappers.tables;

import lombok.Data;

@Data
public class UserInfo {
    String username;
    String shopName;
    String shopAddress;
    String phoneNumber;
    String openingHours;
    String intro;
    String cover;
    String banner;
    String workImages;
}
