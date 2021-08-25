package com.example.zuulservice.filter;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

@Slf4j // lombok
@Component // Component 등록 (용도가 정확하지않을 때 사용 일반적인 Bean 으로 사용하겠다)
public class ZuulLoggingFilter extends ZuulFilter {


    @Override
    public Object run() throws ZuulException {
        // 로거 목적에 따라 info,debug,error,warning 등등 쓰면됨
        log.info("************************** printing logs: ");

        RequestContext ctx = RequestContext.getCurrentContext();

        HttpServletRequest request = ctx.getRequest();

        log.info("************************** " + request.getRequestURI());
        return null;
    }

    //필터의 타입
    @Override
    public String filterType() {
        return "pre";
    }

    // 여러개가 있을때 순서
    @Override
    public int filterOrder() {
        return 1;
    }

    // 필터를 쓰겠다 쓰지않겠다
    @Override
    public boolean shouldFilter() {
        return true;
    }


}
