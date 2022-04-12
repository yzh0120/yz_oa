package com.yz.oa.service;

import com.yz.oa.dto.requestDto.PageList.RolePageDto;
import com.yz.oa.entity.Role;
import com.baomidou.mybatisplus.extension.service.IService;
import com.yz.oa.utils.selfWeb.returnResult.PageResult;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author yz
 * @since 2022-04-12
 */
public interface RoleService extends IService<Role> {

    public PageResult<Role> pageList(RolePageDto rolePageDto);
}
