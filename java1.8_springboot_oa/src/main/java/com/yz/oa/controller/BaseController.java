package com.yz.oa.controller;

import com.yz.oa.service.UserService;
import com.yz.oa.utils.selfWeb.returnResult.ApiResult;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;

public class BaseController {
    @Autowired
    HttpServletRequest req;

    @Autowired
    UserService userService;


}
