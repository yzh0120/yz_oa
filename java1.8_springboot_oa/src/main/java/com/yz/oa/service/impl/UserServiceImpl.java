package com.yz.oa.service.impl;

import cn.hutool.core.map.MapUtil;
import com.google.code.kaptcha.Producer;
import com.yz.oa.dto.Captcha;
import com.yz.oa.entity.User;
import com.yz.oa.mapper.UserMapper;
import com.yz.oa.service.UserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yz.oa.utils.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sun.misc.BASE64Encoder;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.UUID;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author yz
 * @since 2022-04-09
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

    @Autowired
    Producer producer;

    @Autowired
    RedisUtil redisUtil;

    @Override
    public Captcha getCaptcha() {
        String captchaToken = UUID.randomUUID().toString();
        String code = producer.createText();

        // 为了测试
        captchaToken = "aaaaa";
        code = "11111";

        BufferedImage image = producer.createImage(code);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        try {
            ImageIO.write(image, "jpg", outputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }

        BASE64Encoder encoder = new BASE64Encoder();
        String str = "data:image/jpeg;base64,";
        String base64Img = str + encoder.encode(outputStream.toByteArray());
        redisUtil.hset("captcha", captchaToken, code, 120);


        /*return MapUtil.builder()
                .put("token", key)
                .put("captchaImg", base64Img)
                .build();*/

        Captcha captcha = new Captcha();
        captcha.setCaptchaToken(captchaToken);
        captcha.setCaptchaImgBase64(base64Img);
        return captcha;
    }
}
