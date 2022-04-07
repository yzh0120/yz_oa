package com.yz.controller;

import com.yz.common.annotation.UserLoginToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class demoController {

    @GetMapping("/demo")
    public String demo(){
//        int a = 1/0;
        return "abcdefg";
    }

    @GetMapping("/demo1")
    @UserLoginToken
    public String demo1(@RequestParam("a") String a){
//        int a = 1/0;
        return "abcde123fg";
    }
}
