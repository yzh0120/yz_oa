package com.yz.oa.dto.responseDto;

import lombok.Data;

@Data
public class Captcha {
    private String captchaToken;
    private String captchaImgBase64;
}
