package com.dw.server.controllers;

import com.dw.server.objects.CroppedImageDTO;
import com.dw.server.objects.MarkedImageDTO;
import com.dw.server.services.WarpPerspectiveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class WarpPerspectiveController {
    @Autowired
    public WarpPerspectiveService warpPerspectiveService;

    @PostMapping(value = "/warp_perspective")
    public CroppedImageDTO warpPerspectiveController(@RequestBody MarkedImageDTO markedImageDTO){
        return warpPerspectiveService.warpPerspective(markedImageDTO);
    }
}
