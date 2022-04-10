package com.yz.oa.utils.selfWeb.httpServletRequest;



import com.alibaba.fastjson.JSON;
import net.sf.json.JSONObject;
//import com.alibaba.fastjson.JSONObject;
import com.yz.oa.utils.Const;

import javax.servlet.ReadListener;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.io.*;


public class MyRequest extends HttpServletRequestWrapper{

    private byte[] body;

    public MyRequest(HttpServletRequest request) throws IOException {
        super(request);
        //1.获取字符流
        BufferedReader reader = request.getReader();
        try (StringWriter writer = new StringWriter()) {
            //2.读取数据
            int read;
            char[] buf = new char[1024 * 8];
            while ((read = reader.read(buf)) != -1) {
                writer.write(buf, 0, read);
            }
            this.body = writer.getBuffer().toString().getBytes();
        }
    }


    public  <T> T getBody(T t) {
        return (T) JSON.parseObject(new String(body)).getObject(Const.body,t.getClass());
    }

    public void setBody(String str){

        JSONObject jsonObject = new JSONObject();
        jsonObject.put(Const.body, str);
        System.out.println(jsonObject+"jsonObject");
        this.body = jsonObject.toString().getBytes();
        /*jsonObjec转换成String后出现反斜杠的问题
        https://blog.csdn.net/MaleLiu/article/details/107565713


        https://www.cnblogs.com/Marydon20170307/p/13878907.html
        *
        * */

    }


//    在过滤器设置重设 body
    public  void setBodyOnFilter(byte[] bytes) {
        this.body = bytes;
    }

    @Override
    public ServletInputStream getInputStream() throws IOException {
        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(body);
        return new ServletInputStream() {

            @Override
            public int read() throws IOException {
                return byteArrayInputStream.read();
            }

            @Override
            public void setReadListener(ReadListener listener) {
            }

            @Override
            public boolean isReady() {
                return false;
            }

            @Override
            public boolean isFinished() {
                return false;
            }
        };
    }
}

/*
*
* public class CustomHttpServletRequestWrapper extends HttpServletRequestWrapper{

    private byte[] body;

    public CustomHttpServletRequestWrapper(HttpServletRequest request) throws IOException {
        super(request);
        //1.获取字符流
        BufferedReader reader = request.getReader();
        try (StringWriter writer = new StringWriter()) {
            //2.读取数据
            int read;
            char[] buf = new char[1024 * 8];
            while ((read = reader.read(buf)) != -1) {
                writer.write(buf, 0, read);
            }
            this.body = writer.getBuffer().toString().getBytes();
        }
    }

    public byte[] getBody() {
        return body;
    }

    @Override
    public ServletInputStream getInputStream() throws IOException {
        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(body);
        return new ServletInputStream() {

            @Override
            public int read() throws IOException {
                return byteArrayInputStream.read();
            }

            @Override
            public void setReadListener(ReadListener listener) {
            }

            @Override
            public boolean isReady() {
                return false;
            }

            @Override
            public boolean isFinished() {
                return false;
            }
        };
    }
}

*
*
* */