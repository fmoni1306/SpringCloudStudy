package com.example.userservice.security;

import com.example.userservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurity extends WebSecurityConfigurerAdapter {

    private final UserService userService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    // jwt 만들어 질때 다양한 정보는 application.yml 에서 가져오기 위해 Environment 가져옴
    private final Environment env;

    // 권한에 대한 설정
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
//        http.authorizeRequests().antMatchers("/users/**").permitAll(); 전체에 대해 허가
        http.authorizeRequests().antMatchers("/**") // 모든 사용자 제한
                .hasIpAddress("192.168.219.104") // IP를 제한적으로 받음
                .and()
                .addFilter(getAuthenticationFilter()); // 필터를 통과한 데이터에 한에서 권한을 부여

        // h2-console 사용가능
        http.headers().frameOptions().disable();
    }

    // 필터 추가
    private AuthenticationFilter getAuthenticationFilter() throws Exception {
        // AuthenticationFilter 인스턴스 생성
        AuthenticationFilter authenticationFilter =
                new AuthenticationFilter(authenticationManager(), userService, env);

        // AuthenticationManger 는 ProviderManager 를 구현한 클래스
        // 인자로 전달받은 유저에 대한 인증 정보를 담고 있으며, 해당 인증정보가 유효할 경우
        // UserDetailsService 에서 적절한 principal 을 가지고 있는 Authentication 객체를
        // 반환해 주는 역할을 하는 인증 공급자(Provider)
//        authenticationFilter.setAuthenticationManager(authenticationManager());

        return authenticationFilter;
    }

    // 인증에 대한 설정
    // select pwd from users where email=?
    // db_pwd(encrypted) == input_pwd(must be encrypted)
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(bCryptPasswordEncoder);
    }


}
