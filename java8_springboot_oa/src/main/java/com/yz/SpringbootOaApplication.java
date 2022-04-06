package com.yz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication

@ServletComponentScan(basePackages = "com.yz.config")  //第一种方式
public class SpringbootOaApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootOaApplication.class, args);
    }

}
