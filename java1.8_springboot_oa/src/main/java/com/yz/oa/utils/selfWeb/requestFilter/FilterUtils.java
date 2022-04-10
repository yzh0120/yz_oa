package com.yz.oa.utils.selfWeb.requestFilter;

import com.yz.oa.utils.selfWeb.httpServletRequest.MyRequest;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;


public class FilterUtils implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain) throws IOException, ServletException {
//        //1.获取字符流
//        BufferedReader br = servletRequest.getReader();
//        //2.读取数据
//        String line = null;
//         while((line = br.readLine()) != null){
//                 System.out.println(line);
//         }
//        System.out.println("进入过滤器");



        MyRequest request = null;
        if (servletRequest instanceof HttpServletRequest) {
            request = new MyRequest((HttpServletRequest) servletRequest);
        }
        if (request == null) {
            chain.doFilter(servletRequest, servletResponse);
        } else {
            chain.doFilter(request, servletResponse);
        }
    }
}

