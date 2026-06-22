package com.example.hsmbackend.service;

import com.example.hsmbackend.dto.LoginRequestDto;
import com.example.hsmbackend.dto.UserCreateDto;
import com.example.hsmbackend.dto.UserDto;
import com.example.hsmbackend.model.User;

import java.util.List;

public interface UserService {
    User createUser(UserCreateDto userCreateDto);

    UserDto updateUser(Long id, UserCreateDto userCreateDto);

    void deleteUser(Long id);

    UserDto getUserById(Long id);

    List<UserDto> getAllUsers();

    boolean login(LoginRequestDto loginRequestDto);
}