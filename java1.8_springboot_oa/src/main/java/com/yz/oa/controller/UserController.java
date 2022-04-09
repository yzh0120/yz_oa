package com.yz.oa.controller;

import com.yz.oa.dto.requestDto.UserLogin;
import com.yz.oa.utils.selfWeb.returnResult.ApiResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



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




    /*
    * 用户获取验证码
    * */
    @GetMapping("/captcha")
    public ApiResult captcha(){
        return ApiResult.success(userService.getCaptcha());
    }

    @PostMapping("/login")
    public ApiResult login(@RequestBody UserLogin userLogin , HttpServletResponse resp){
        return ApiResult.success(userService.checkLogin(userLogin,resp));
    }

    @GetMapping("/getUserInfo")
    public ApiResult getUserInfo(HttpServletRequest req){
        return ApiResult.success(userService.getUserInfo(req));
    }

}
