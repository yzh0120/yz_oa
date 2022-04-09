package com.yz.oa.dto.requestDto;

import lombok.Data;

@Data
public class UserLogin {
    public String username;
    public String password;
    public String captchaToken;
    public String captchaImgBase64Code;
}
