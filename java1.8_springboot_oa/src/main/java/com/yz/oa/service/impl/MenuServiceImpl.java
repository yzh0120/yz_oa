package com.yz.oa.service.impl;

import cn.hutool.json.JSONUtil;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yz.oa.dto.requestDto.PageList.MenuPage;
import com.yz.oa.entity.Menu;
import com.yz.oa.mapper.MenuMapper;
import com.yz.oa.service.MenuService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yz.oa.utils.selfWeb.returnResult.PageData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author yz
 * @since 2022-04-09
 */
@Service
public class MenuServiceImpl extends ServiceImpl<MenuMapper, Menu> implements MenuService {
    @Autowired
    MenuService menuService;

    @Autowired
    MenuMapper menuMapper;

    @Override
    public List<Menu> gertMenuTree() {

        List<Menu> menuList = menuService.list(new QueryWrapper<Menu>());
        if(menuList != null){
            // 转树状结构
            List<Menu> menuTree = buildTreeMenu(menuList);
            return menuTree;
        }else{
            return new ArrayList<>();

        }

    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Object insertMenu(Menu menu) {
        boolean b = menuService.save(menu);
        return b;
    }

    @Override
    public PageData<Menu>getPageListByParentId(MenuPage menuPage){
        Page<Menu> page = new Page<>(menuPage.getPageNo(),menuPage.getPageSize());
        QueryWrapper<Menu> queryWrapper = new QueryWrapper<Menu>()
                .eq(menuPage.getParentId() != null, "parent_id", menuPage.getParentId())
                .like(menuPage.getRouteTitle() != null, "route_title", menuPage.getRouteTitle());
//        return  this.defaultPageList(page,queryWrapper);
        return PageData.defaultPageList(page,queryWrapper,menuMapper);
    }


    private List<Menu> buildTreeMenu(List<Menu> menus) {

        List<Menu> finalMenus = new ArrayList<>();

        // 先各自寻找到各自的孩子
        for (Menu menu : menus) {

            for (Menu e : menus) {
                if (menu.getId().equals(e.getParentId()) ) {
                    menu.getChildren().add(e);
                }
            }
            // 提取出父节点
            if (menu.getParentId() == null) {
                finalMenus.add(menu);
            }

        }

//        System.out.println(JSONUtil.toJsonStr(finalMenus));
        return finalMenus;
    }

    public PageData<Menu> defaultPageList( Page<Menu> page,Wrapper<Menu> queryWrapper){
        Page<Menu> menuPageObj = menuMapper.selectPage(page, queryWrapper);
        PageData pageData = new PageData(menuPageObj.getRecords(), menuPageObj.getTotal());
        System.out.println(pageData+"pageData");
        return pageData;
    }
}









//        Page<Menu> menuPageObj = menuMapper.selectPage(page,
//                new QueryWrapper<Menu>()
//                .eq(menuPage.getParentId() != null,"parent_id",menuPage.getParentId())
//                .like(menuPage.getRouteTitle() != null, "route_title", menuPage.getRouteTitle())
//        );
//        return menuPageObj.getRecords();