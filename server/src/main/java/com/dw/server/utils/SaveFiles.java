package com.dw.server.utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.math.BigInteger;
import java.security.MessageDigest;

public class SaveFiles {
    public static String imagePath = "C:\\CODE\\web\\DWserver\\images\\";

    public static String saveFiles(MultipartFile[] files){
        String md5 = "";
        for (MultipartFile file :
                files) {
            md5 += SaveFiles.saveFile(file);
            md5 += ",";
        }
        if(md5.length()>0){
            return md5.substring(0, md5.length()-1);
        }else {
            return "";
        }
    }

    public static String saveFile(MultipartFile file) {
        try {
            String md5 = getMd5(file);
            file.transferTo(new File(imagePath + md5 + ".png"));
            return md5 + ".png";
        }catch (IOException ioException){
            System.out.println("保存文件出错！！！");
            return null;
        }
    }

    public static String getMd5(MultipartFile file) {
        try {
            byte[] uploadBytes = file.getBytes();
            MessageDigest messageDigest = MessageDigest.getInstance("MD5");
            byte[] digest = messageDigest.digest(uploadBytes);
            return new BigInteger(1, digest).toString(16);
        } catch (Exception e) {
            System.out.println("获取Md5失败");
        }
        return null;
    }
}
