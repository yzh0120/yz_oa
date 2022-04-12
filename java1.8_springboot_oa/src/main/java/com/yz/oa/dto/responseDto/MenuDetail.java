package com.yz.oa.dto.responseDto;

import com.yz.oa.entity.Menu;
import com.yz.oa.entity.ScopeBtn;
import lombok.Data;

import java.util.List;
@Data
public class MenuDetail {
    private Menu menu;
    private List<ScopeBtn> scopeBtnList;
}
