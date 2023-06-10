package com.my.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @GetMapping("/")
    public String index() {
        return "index.html"; // index.html 파일의 내용을 반환
    }
}
