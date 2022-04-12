package com.yz.oa.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yz.oa.dto.requestDto.PageList.RolePageDto;
import com.yz.oa.entity.Role;
import com.yz.oa.mapper.RoleMapper;
import com.yz.oa.service.RoleService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yz.oa.utils.selfWeb.returnResult.PageResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author yz
 * @since 2022-04-12
 */
@Service
public class RoleServiceImpl extends ServiceImpl<RoleMapper, Role> implements RoleService {

    @Autowired
    RoleMapper roleMapper;

    @Autowired
    RoleService roleService;

    @Override
    public PageResult<Role> pageList(RolePageDto rolePageDto) {

        Page page = new Page(rolePageDto.getPageNo(), rolePageDto.getPageSize());
        QueryWrapper<Role> queryWrapper = new QueryWrapper<Role>().like(StringUtils.isNotBlank(rolePageDto.getRoleName()), "role_name", rolePageDto.getRoleName());

//        Page pageObj = roleService.page(page, queryWrapper);
//        PageResult pageResult = new PageResult(pageObj.getRecords(), pageObj.getTotal());
//        return pageResult;

        return PageResult.defaultPageList(page,queryWrapper,roleService);
    }
}
