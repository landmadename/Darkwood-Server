package com.dw.server.objects;

import lombok.Data;

import java.util.List;

@Data
public class BrowserDTO {
    Integer currentPage;
    Long pageCount;
    List<BrowserItem> browserItems;
}
