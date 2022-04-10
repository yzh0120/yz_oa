package com.yz.oa.utils.selfWeb.returnResult;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yz.oa.entity.Menu;
import lombok.Data;

import java.util.List;

@Data
public class PageData<T> {

    private long total;

    private List<T> records;

    public PageData() {

    }

    public PageData( List<T> records,long total) {
        this.total = total;

        this.records = records;
    }

//    public Page(PageInfo<T> pageInfo) {
//        this.total = pageInfo.getTotal();
////        this.curPage = pageInfo.getPageNum();
////        this.pageSize = pageInfo.getPageSize();
////        this.pages =  pageInfo.getPages();
////        this.size = pageInfo.getSize();
//        this.records = pageInfo.getList();
//    }

    public static  <T> PageData<T> defaultPageList(Page<T> page, Wrapper<T> queryWrapper, BaseMapper baseMapper){
        IPage pageObj = baseMapper.selectPage(page, queryWrapper);
        PageData pageData = new PageData(pageObj.getRecords(), pageObj.getTotal());
        System.out.println(pageData+"pageData");
        return pageData;

    }

}