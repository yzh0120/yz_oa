package com.yz.oa.dto.requestDto;

import com.yz.oa.entity.Menu;
import com.yz.oa.entity.ScopeBtn;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class AddMenuDto {
    private Menu menu = new Menu();

    private List<ScopeBtn> scopeBtnList  ;
}
