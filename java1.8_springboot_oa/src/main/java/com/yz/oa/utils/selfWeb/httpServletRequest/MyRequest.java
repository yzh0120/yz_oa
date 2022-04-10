package com.yz.oa.utils.selfWeb.httpServletRequest;



import com.alibaba.fastjson.JSON;
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

//    public  <T> T getBody(Class T) {
//        return (T) JSON.parseObject(new String(body)).getObject(Const.body,T);
//    }

    public  <T> T getBody(T t) {
        return (T) JSON.parseObject(new String(body)).getObject(Const.body,t.getClass());
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