package com.yz.oa.dto;

import lombok.Data;

@Data
public class Captcha {
    private String captchaToken;
    private String captchaImgBase64;
}
