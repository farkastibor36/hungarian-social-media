package com.example.hsmbackend.service;

import com.example.hsmbackend.dto.LoginRequestDto;
import com.example.hsmbackend.dto.UserCreateDto;
import com.example.hsmbackend.dto.UserDto;
import com.example.hsmbackend.mapper.UserMapper;
import com.example.hsmbackend.model.User;
import com.example.hsmbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserCRUDServiceImpl implements UserService {
    private final UserMapper userMapper;
    private final UserRepository userRepository;

    @Override
    public User createUser(UserCreateDto userCreateDto) {
        if (userRepository.existsByEmail(userCreateDto.email())) {
            throw new RuntimeException("Ezzel az email címmel már regisztráltak");
        }
        User user = new User();
        user.setLastName(userCreateDto.lastName());
        user.setFirstName(userCreateDto.firstName());
        user.setBirthDate(userCreateDto.birthDate());
        user.setEmail(userCreateDto.email());
        user.setPassword(userCreateDto.password());

        Date createdAt = new Date();
        user.setCreatedAt(createdAt);
        return userRepository.save(user);
    }

    @Override
    public UserDto updateUser(Long id, UserCreateDto userCreateDto) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setFirstName(userCreateDto.firstName());
        user.setLastName(userCreateDto.lastName());
        user.setBirthDate(userCreateDto.birthDate());
        user.setEmail(userCreateDto.email());
        user.setPassword(userCreateDto.password());
        return userMapper.toDto(userRepository.save(user));
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public UserDto getUserById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        return userMapper.toDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(userMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public boolean login(LoginRequestDto loginRequestDto) {
        User user = userRepository.findByEmail(loginRequestDto.email());
        if (user == null) {
            throw new RuntimeException("User not found with " + loginRequestDto.email());
        }
        return user.getPassword().equals(loginRequestDto.password());
    }
}