package com.yz.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class demo {

    @GetMapping("/demo")
    public String demo(){
        int a = 1/0;
        return "abcdefg";
    }
}
