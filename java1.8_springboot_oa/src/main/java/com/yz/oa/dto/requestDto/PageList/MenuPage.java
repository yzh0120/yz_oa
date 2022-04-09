package com.yz.oa.dto.requestDto.PageList;

import lombok.Data;

@Data
public class MenuPage  extends PageDto {

    private String parentId;

    private String routeTitle;
}
