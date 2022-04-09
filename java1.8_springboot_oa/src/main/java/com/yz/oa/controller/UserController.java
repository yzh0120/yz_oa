package com.yz.oa.controller;


import com.google.code.kaptcha.Producer;
import com.yz.oa.service.UserService;
import com.yz.oa.utils.selfWeb.returnResult.ApiResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;


/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author yz
 * @since 2022-04-09
 */
@RestController
@RequestMapping("/user")
public class UserController extends BaseController {

//    @Autowired
//    Producer producer;

    @GetMapping("/captcha")
    public ApiResult captcha(){
        return ApiResult.success(userService.getCaptcha());
    }

}
