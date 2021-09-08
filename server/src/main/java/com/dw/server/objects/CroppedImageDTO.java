package com.dw.server.objects;

public class CroppedImageDTO {
    public String prev;
    public String bottom;
    public String right;

    public CroppedImageDTO(String prev, String bottom, String right) {
        this.prev = prev;
        this.bottom = bottom;
        this.right = right;
    }
}
