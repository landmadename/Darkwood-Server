package com.dw.server.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.io.File;

@Configuration
public class ImagesConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String currentPath = new File(".").getAbsolutePath();
        registry
                .addResourceHandler("/images/**")
                .addResourceLocations("file:images/");
    }
}
