package com.yz.config;

import com.baomidou.mybatisplus.autoconfigure.ConfigurationCustomizer;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.BlockAttackInnerInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan("com.markerhub.mapper")
public class MybatisPlusConfig {
    //mybatis拦截器
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor(){
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor());//分页插件
        interceptor.addInnerInterceptor(new BlockAttackInnerInterceptor());//防止全表更新

        return interceptor;
    }

    //分页插件 需要配置这些 防止缓存出现问题
    @Bean
    public ConfigurationCustomizer configurationCustomizer(){
        return  configuration -> configuration.setUseDeprecatedExecutor(false);
    }
}
