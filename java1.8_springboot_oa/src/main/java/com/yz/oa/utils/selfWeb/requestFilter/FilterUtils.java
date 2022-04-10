package com.yz.oa.utils.selfWeb.requestFilter;

import com.yz.oa.utils.encryptionAndDecryption.Aes;
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


        System.out.println("请求方式"+ ((HttpServletRequest) servletRequest).getMethod());
        MyRequest request = null;
        if (servletRequest instanceof HttpServletRequest  &&((HttpServletRequest) servletRequest).getMethod().equals("POST")){
            request = new MyRequest((HttpServletRequest) servletRequest);
            byte[] allSendStr = "".getBytes();
            byte[] bytes =  request.getBody(allSendStr);//获取前端byte[] 加密信息 p

            //解密前端的加密信息
            String str = Aes.decrypt(bytes);
            request.setBody(str);

        }
        if (request == null) {
            chain.doFilter(servletRequest, servletResponse);
        } else {
            chain.doFilter(request, servletResponse);
        }
    }
}

