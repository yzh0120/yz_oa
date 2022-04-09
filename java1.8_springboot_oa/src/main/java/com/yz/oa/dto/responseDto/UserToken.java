package com.yz.oa.dto.responseDto;

import lombok.Data;

@Data
public class UserToken {
    private String token;
    private Long expireDateTimeSpan;
}
