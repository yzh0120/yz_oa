package com.yz.oa.controller;



import com.yz.oa.dto.requestDto.PageList.MenuPage;
import com.yz.oa.entity.Menu;
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

    @GetMapping("/menuTree")
    public ApiResult menuTree(){
        return  ApiResult.success(menuService.gertMenuTree());
    }

    @PostMapping("/saveMenu")
    public ApiResult insertMenu(@RequestBody Menu menu){
        return  ApiResult.success(menuService.insertMenu(menu));
    }

    @PostMapping("/pageListByParentId")
    public ApiResult<PageData<Menu>> pageListByParentId(@RequestBody MenuPage menuPage){
        return  ApiResult.success(menuService.getPageListByParentId(menuPage));
    }
}
