package com.yz.oa.utils.selfWeb.returnResult;


import com.yz.oa.utils.encryptionAndDecryption.Aes;
import com.yz.oa.utils.exception.IEnum;
import com.yz.oa.utils.exception.SystemStatusEnum;
import lombok.Data;
import com.alibaba.fastjson.JSON;

@Data
public class ApiResult<T> {
    /**
     * 状态码
     */
    private int code;

    /**
     * 状态信息
     */
    private String info;

    /**
     * 返回数据
     */
    private Object data;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public Object getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public ApiResult() {
    }

//    public ApiResult(T data) {
//        this.code = SystemStatusEnum.SUCCESS.getCode();
//        this.info = SystemStatusEnum.SUCCESS.getMsg();
//        this.data = data;
//    }
    public ApiResult(T data) {
        this.code = SystemStatusEnum.SUCCESS.getCode();
        this.info = SystemStatusEnum.SUCCESS.getMsg();
//        Aes aes = new Aes(JSON.toJSONString(data));
//        this.data = aes.encrypt();
        this.data = Aes.encrypt(JSON.toJSONString(data));
    }

    public ApiResult(int code, String msg) {
        this.code = code;
        this.info = msg;
    }

    public ApiResult(IEnum iEnum) {
        this.code = iEnum.getCode();
        this.info = iEnum.getMsg();
    }

    public ApiResult(IEnum iEnum, T data) {
        this.code = iEnum.getCode();
        this.info = iEnum.getMsg();
        this.data = data;
    }

    public static <T> ApiResult<T> success(T data) {

        return new ApiResult<>(data);
    }
//    public static <T> Object success(T data) {
//
//        return new ApiResult<>(data);
//    }

    public static ApiResult<Void> error() {
        return new ApiResult<>(SystemStatusEnum.UN_KNOW_ERROR);
    }

    public static ApiResult<Void> error(IEnum iEnum) {
        return new ApiResult<>(iEnum);
    }

    public static <T> ApiResult<T> error(T data) {
        return new ApiResult<>(SystemStatusEnum.BUSINESS_ERROR, data);
    }

    public static <T> ApiResult<T> error(IEnum iEnum, T data) {
        return new ApiResult<>(iEnum, data);
    }

    public static <T> ApiResult<T> error(int code, String msg) {
        return new ApiResult<>(code, msg);
    }
}

/*
*

@Data
public class ApiResult<T> {

private int code;

    private String info;


    private T data;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public ApiResult() {
    }

    public ApiResult(T data) {
        this.code = SystemStatusEnum.SUCCESS.getCode();
        this.info = SystemStatusEnum.SUCCESS.getMsg();
        this.data = data;
    }

    public ApiResult(int code, String msg) {
        this.code = code;
        this.info = msg;
    }

    public ApiResult(IEnum iEnum) {
        this.code = iEnum.getCode();
        this.info = iEnum.getMsg();
    }

    public ApiResult(IEnum iEnum, T data) {
        this.code = iEnum.getCode();
        this.info = iEnum.getMsg();
        this.data = data;
    }

    public static <T> ApiResult<T> success(T data) {
        return new ApiResult<>(data);
    }

    public static ApiResult<Void> error() {
        return new ApiResult<>(SystemStatusEnum.UN_KNOW_ERROR);
    }

    public static ApiResult<Void> error(IEnum iEnum) {
        return new ApiResult<>(iEnum);
    }

    public static <T> ApiResult<T> error(T data) {
        return new ApiResult<>(SystemStatusEnum.BUSINESS_ERROR, data);
    }

    public static <T> ApiResult<T> error(IEnum iEnum, T data) {
        return new ApiResult<>(iEnum, data);
    }

    public static <T> ApiResult<T> error(int code, String msg) {
        return new ApiResult<>(code, msg);
    }
}
*
*
* */