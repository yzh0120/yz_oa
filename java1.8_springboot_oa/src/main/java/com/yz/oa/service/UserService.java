package com.yz.oa.service;

import com.yz.oa.dto.requestDto.UserLogin;
import com.yz.oa.dto.responseDto.Captcha;
import com.yz.oa.entity.User;
import com.baomidou.mybatisplus.extension.service.IService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author yz
 * @since 2022-04-09
 */
public interface UserService extends IService<User> {

    Captcha getCaptcha();

    User checkLogin(UserLogin userLogin, HttpServletResponse resp);

    User getUserInfo(HttpServletRequest req);
}
