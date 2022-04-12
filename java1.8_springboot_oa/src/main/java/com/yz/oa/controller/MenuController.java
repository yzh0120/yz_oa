package com.yz.oa.controller;



import com.yz.oa.dto.requestDto.AddMenuDto;
import com.yz.oa.dto.requestDto.PageList.MenuPageDto;
import com.yz.oa.entity.Menu;
import com.yz.oa.service.MenuService;
import com.yz.oa.utils.selfWeb.httpServletRequest.MyRequest;
import com.yz.oa.utils.selfWeb.requestInterceptor.UserLoginToken;
import com.yz.oa.utils.selfWeb.returnResult.ApiResult;
import com.yz.oa.utils.selfWeb.returnResult.PageResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;


/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author yz
 * @since 2022-04-09
 */
@RestController
@RequestMapping("/menu")

public class MenuController  {
    @Autowired
    MenuService menuService;

    @UserLoginToken
    @GetMapping("/menuTree")
    public ApiResult menuTree(){
        return  ApiResult.success(menuService.gertMenuTree());
    }

//    @UserLoginToken
//    @PostMapping("/saveMenu")
//    public ApiResult insertMenu(@RequestBody Menu menu){
//        return  ApiResult.success(menuService.insertMenu(menu));
//    }
    @UserLoginToken
    @PostMapping("/saveMenu")
    public ApiResult insertMenu(MyRequest myRequest){
        return  ApiResult.success(menuService.insertMenu(myRequest.getBody(new AddMenuDto())));
    }



    @UserLoginToken
    @PostMapping("/pageListByParentId")
    public ApiResult<PageResult<Menu>> pageListByParentId(MyRequest myRequest){
        return  ApiResult.success(menuService.getPageListByParentId(myRequest.getBody(new MenuPageDto())));
    }

    @UserLoginToken
    @PostMapping("/deleteById")
    public ApiResult deleteById(@RequestParam("id") String id){
        return ApiResult.success(menuService.deleteById(id));
    }

    @UserLoginToken
    @PostMapping("/updateMenu")
    public ApiResult updateMenu(MyRequest myRequest){
        return ApiResult.success(menuService.updateMenu(myRequest.getBody(new AddMenuDto())));
    }

    @UserLoginToken
    @GetMapping("getMenuDetailById")
    public ApiResult getMenuDetailById(@RequestParam("id") String id){
        return  ApiResult.success(menuService.getMenuDetailById(id));
    }

    @UserLoginToken
    @GetMapping("getScopeByRouteName")
    public ApiResult getScopeByRouteName(@RequestParam("routeName") String routeName){
        return ApiResult.success(menuService.getScopeByRouteName(routeName));
    }
}
//    @UserLoginToken
//    @PostMapping("/pageListByParentId")
//    public ApiResult<PageData<Menu>> pageListByParentId(@RequestBody MenuPage menuPage){
//        return  ApiResult.success(menuService.getPageListByParentId(menuPage));
//    }

//    @UserLoginToken
//    @PostMapping("/pageListByParentId")
//    public ApiResult<PageData<Menu>> pageListByParentId(MyRequest myRequest){
//        return  ApiResult.success(menuService.getPageListByParentId(myRequest.getBody().getObject(Const.body, MenuPage.class)));
//    }