package com.yz.oa.controller;



import com.yz.oa.dto.requestDto.PageList.MenuPage;
import com.yz.oa.entity.Menu;
import com.yz.oa.utils.Const;
import com.yz.oa.utils.selfWeb.httpServletRequest.MyRequest;
import com.yz.oa.utils.selfWeb.requestInterceptor.UserLoginToken;
import com.yz.oa.utils.selfWeb.returnResult.ApiResult;
import com.yz.oa.utils.selfWeb.returnResult.PageData;
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
public class MenuController extends BaseController {

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
        return  ApiResult.success(menuService.insertMenu(myRequest.getBody(new Menu())));
    }



    @UserLoginToken
    @PostMapping("/pageListByParentId")
    public ApiResult<PageData<Menu>> pageListByParentId(MyRequest myRequest){
        return  ApiResult.success(menuService.getPageListByParentId(myRequest.getBody(new MenuPage())));
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