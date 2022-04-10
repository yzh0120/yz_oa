package com.yz.oa.controller;

import com.yz.oa.dto.requestDto.UserLogin;
import com.yz.oa.entity.Menu;
import com.yz.oa.utils.selfWeb.httpServletRequest.MyRequest;
import com.yz.oa.utils.selfWeb.requestInterceptor.UserLoginToken;
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

//    @PostMapping("/login")
//    public ApiResult login(@RequestBody UserLogin userLogin , HttpServletResponse resp){
//        return ApiResult.success(userService.checkLogin(userLogin,resp));
//    }
    @PostMapping("/login")
    public ApiResult login(MyRequest myRequest , HttpServletResponse resp){
        return ApiResult.success(userService.checkLogin(myRequest.getBody(new UserLogin()),resp));
    }



    @UserLoginToken
    @GetMapping("/getUserInfo")
    public ApiResult getUserInfo(HttpServletRequest req){
        return ApiResult.success(userService.getUserInfo(req));
    }

}
