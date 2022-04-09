package com.yz.oa.utils.selfWeb.returnResult;

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



}