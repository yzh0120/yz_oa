package com.yz.oa.controller;


import com.yz.oa.dto.requestDto.PageList.RolePageDto;
import com.yz.oa.entity.Role;
import com.yz.oa.mapper.RoleMapper;
import com.yz.oa.service.RoleService;
import com.yz.oa.utils.selfWeb.httpServletRequest.MyRequest;
import com.yz.oa.utils.selfWeb.requestInterceptor.UserLoginToken;
import com.yz.oa.utils.selfWeb.returnResult.ApiResult;
import com.yz.oa.utils.selfWeb.returnResult.PageResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author yz
 * @since 2022-04-12
 */
@RestController
@RequestMapping("/role")
public class RoleController {

    @Autowired
    RoleService roleService;

    @UserLoginToken
    @PostMapping("/pageList")
    public ApiResult<PageResult<Role>> pageList(MyRequest myRequest){
        return ApiResult.success(roleService.pageList(myRequest.getBody(new RolePageDto())));
    }

    @UserLoginToken
    @PostMapping("/save")
    public ApiResult save(MyRequest myRequest){
        return ApiResult.success(roleService.save(myRequest.getBody(new Role())));
    }

    @UserLoginToken
    @PostMapping("/update")
    public ApiResult update(MyRequest myRequest){
        return ApiResult.success(roleService.updateById(myRequest.getBody(new Role())));
    }

    @UserLoginToken
    @PostMapping("/del")
    public ApiResult del(@RequestParam("id") String id){
        return ApiResult.success(roleService.removeById(id));
    }

}
