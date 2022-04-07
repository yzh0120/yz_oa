package com.yz.controller;

import com.yz.common.lang.Result;
import com.yz.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/login")
    public Result login(HttpServletResponse response){
        // 生成jwt，并放置到请求头中
        String jwt = jwtUtils.generateToken("123");
        response.setHeader(jwtUtils.getHeader(), jwt);

        Result result = Result.succ("");

        return result;
    }
}
