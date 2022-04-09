package com.yz.oa.controller;

//import com.yz.oa.service.UserService;
import com.yz.oa.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;
import javax.xml.ws.Response;

public class BaseController {
    @Autowired
    HttpServletRequest req;

    @Autowired
    UserService userService;




}
