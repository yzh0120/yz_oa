package com.yz.oa.utils.exception;



import com.yz.oa.utils.selfWeb.returnResult.ApiResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@Component
@RestControllerAdvice
public class GlobalExceptionHandler {
    @Autowired
    private HttpServletRequest request;

    /**BusException
     * 业务异常处理
     */
    @ExceptionHandler(BusException.class)
    public ApiResult<String> busExceptionHandler(BusException e) {
        log.error("请求 url: {} 异常: ", request.getRequestURL(), e);
        return ApiResult.error(SystemStatusEnum.BUSINESS_ERROR.getCode(), e.getMsg());
    }
}
