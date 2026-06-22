package com.example.hsmbackend.mapper;

import com.example.hsmbackend.dto.UserCreateDto;
import com.example.hsmbackend.dto.UserDto;
import com.example.hsmbackend.model.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toDto(User user);

    User toEntity(UserDto userDto);

    User toCreateEntity(UserCreateDto userCreateDto);
}