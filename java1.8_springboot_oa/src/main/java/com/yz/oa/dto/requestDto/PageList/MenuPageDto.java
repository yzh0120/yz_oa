package com.yz.oa.dto.requestDto.PageList;

import lombok.Data;

@Data
public class MenuPageDto extends PageDto {

    private String parentId;

    private String routeTitle;
}
