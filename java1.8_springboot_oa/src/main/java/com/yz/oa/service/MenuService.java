package com.yz.oa.service;


import com.yz.oa.dto.requestDto.PageList.MenuPage;
import com.yz.oa.entity.Menu;
import com.baomidou.mybatisplus.extension.service.IService;
import com.yz.oa.utils.selfWeb.returnResult.PageData;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author yz
 * @since 2022-04-09
 */
public interface MenuService extends IService<Menu> {

    List<Menu> gertMenuTree();

    Object insertMenu(Menu menu);

    PageData<Menu> getPageListByParentId(MenuPage menuPage);
}
