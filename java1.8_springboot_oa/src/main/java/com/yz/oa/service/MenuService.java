package com.yz.oa.service;


import com.yz.oa.dto.requestDto.AddMenuDto;
import com.yz.oa.dto.requestDto.PageList.MenuPageDto;
import com.yz.oa.dto.responseDto.MenuDetail;
import com.yz.oa.entity.Menu;
import com.baomidou.mybatisplus.extension.service.IService;
import com.yz.oa.utils.selfWeb.returnResult.PageResult;

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

    Object insertMenu(AddMenuDto addMenuDto);

    PageResult<Menu> getPageListByParentId(MenuPageDto menuPageDto);

    Boolean deleteById(String id);

    Boolean updateMenu(AddMenuDto addMenuDto);

    MenuDetail getMenuDetailById(String id);

//    Object getScopeByRouteName(String routeName);
}
