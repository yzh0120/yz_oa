package com.yz.oa.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yz.oa.dto.requestDto.AddMenuDto;
import com.yz.oa.dto.requestDto.PageList.MenuPageDto;
import com.yz.oa.dto.responseDto.MenuDetail;
import com.yz.oa.entity.Menu;
import com.yz.oa.entity.ScopeBtn;
import com.yz.oa.mapper.MenuMapper;
import com.yz.oa.service.MenuService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yz.oa.service.ScopeBtnService;
import com.yz.oa.utils.selfWeb.returnResult.PageResult;
import io.netty.util.internal.StringUtil;
import org.apache.commons.lang3.StringUtils;
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
@Transactional(rollbackFor = Exception.class)
public class MenuServiceImpl extends ServiceImpl<MenuMapper, Menu> implements MenuService {
    @Autowired
    MenuService menuService;

    @Autowired
    MenuMapper menuMapper;

    @Autowired
    ScopeBtnService scopeBtnService;

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
    public Object insertMenu(AddMenuDto addMenuDto) {
        boolean b = menuService.save(addMenuDto.getMenu());
        this.removeHistoryBtn(addMenuDto.getMenu().getId());
        List<ScopeBtn> scopeBtnList = addMenuDto.getScopeBtnList();
        if(scopeBtnList.size() != 0){
            for(ScopeBtn scopeBtn : scopeBtnList ){
                if(StringUtils.isNotBlank(scopeBtn.getEnCode())){
                    scopeBtn.setMenuId(addMenuDto.getMenu().getId());
                    scopeBtnService.save(scopeBtn);
                }
            }
        }
        return b  ;
    }

    @Override
    public Boolean updateMenu(AddMenuDto addMenuDto) {
        int lineCount = menuMapper.update(addMenuDto.getMenu(), new QueryWrapper<Menu>().eq("id", addMenuDto.getMenu().getId()));
        this.removeHistoryBtn(addMenuDto.getMenu().getId());
        List<ScopeBtn> scopeBtnList = addMenuDto.getScopeBtnList();
        if(scopeBtnList.size() != 0){
            for(ScopeBtn scopeBtn : scopeBtnList ){
                if(StringUtils.isNotBlank(scopeBtn.getEnCode())){
                    scopeBtn.setMenuId(addMenuDto.getMenu().getId());
                    scopeBtnService.save(scopeBtn);
                }
            }
        }
        return new Boolean(lineCount != 0);

    }

    @Override
    public MenuDetail getMenuDetailById(String id) {
        Menu menu = menuService.getById(id);
        System.out.println(menu+"---"+id+"---");
        List<ScopeBtn> scopeBtnList = scopeBtnService.list(new QueryWrapper<ScopeBtn>().eq("menu_id", menu.getId()));
        MenuDetail menuDetail = new MenuDetail();
        menuDetail.setMenu(menu);
        menuDetail.setScopeBtnList(scopeBtnList);
        return menuDetail;
    }

    @Override
    public PageResult<Menu> getPageListByParentId(MenuPageDto menuPageDto){
        Page<Menu> page = new Page<>(menuPageDto.getPageNo(), menuPageDto.getPageSize());
        QueryWrapper<Menu> queryWrapper;
        if(StringUtils.isEmpty(menuPageDto.getParentId())){
            queryWrapper = new QueryWrapper<Menu>()
                    .isNull("parent_id")
                    .like(menuPageDto.getRouteTitle() != null, "route_title", menuPageDto.getRouteTitle());
        }else{
             queryWrapper = new QueryWrapper<Menu>()
                    .eq(menuPageDto.getParentId() != null, "parent_id", menuPageDto.getParentId())
                    .like(menuPageDto.getRouteTitle() != null, "route_title", menuPageDto.getRouteTitle());
        }


        return PageResult.defaultPageList(page,queryWrapper,menuMapper);
    }

    @Override
    public Boolean deleteById(String id) {
        return menuService.remove(new QueryWrapper<Menu>().eq("id",id));
    }

    public void removeHistoryBtn(String menuId){
        scopeBtnService.remove(new QueryWrapper<ScopeBtn>().eq("menu_id",menuId));
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

    public PageResult<Menu> defaultPageList(Page<Menu> page, Wrapper<Menu> queryWrapper){
        Page<Menu> menuPageObj = menuMapper.selectPage(page, queryWrapper);
        PageResult pageResult = new PageResult(menuPageObj.getRecords(), menuPageObj.getTotal());
        return pageResult;
    }
}









//        Page<Menu> menuPageObj = menuMapper.selectPage(page,
//                new QueryWrapper<Menu>()
//                .eq(menuPage.getParentId() != null,"parent_id",menuPage.getParentId())
//                .like(menuPage.getRouteTitle() != null, "route_title", menuPage.getRouteTitle())
//        );
//        return menuPageObj.getRecords();