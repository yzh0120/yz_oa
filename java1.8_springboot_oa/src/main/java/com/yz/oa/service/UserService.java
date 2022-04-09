package com.yz.oa.service;

import com.yz.oa.dto.Captcha;
import com.yz.oa.entity.User;
import com.baomidou.mybatisplus.extension.service.IService;

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

}
