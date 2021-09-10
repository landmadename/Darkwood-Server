package com.dw.server.config;

import com.dw.server.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    LoginService loginService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.formLogin()
                .loginPage("/login")
                .successHandler(loginService.loginSuccess())
                .failureHandler(loginService.loginFail())
                .permitAll();

        http.authorizeRequests()
                .antMatchers("/login", "/register").permitAll()
                .antMatchers("/api/**").permitAll()
                .antMatchers("/", "/static/**", "/*.json", "/*.png").permitAll()
                .antMatchers("/images/**").permitAll()
                .anyRequest().authenticated();
        http.cors().and().csrf().disable();
    }
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // 设置密码加密方式，验证密码的在这里
        auth.userDetailsService(loginService).passwordEncoder(passwordEncoder());
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        // 使用 BCryptPasswordEncoder
        return new BCryptPasswordEncoder();
    }
}
