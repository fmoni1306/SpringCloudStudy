package com.example.userservice.service;

import com.example.userservice.domain.UserEntity;
import com.example.userservice.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    UserDto createUser(UserDto userDto);

    UserDto getUserByUserId(String userId);

    // 가공 하지 않으면 UserEntity (DB에서 가져온걸 ) 바로 사용해도됨
    Iterable<UserEntity> getUserByAll();

    UserDto getUserDetailsByEmail(String email);
}
