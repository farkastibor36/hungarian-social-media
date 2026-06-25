package com.example.hsmbackend.controller;

import com.example.hsmbackend.dto.LoginRequestDto;
import com.example.hsmbackend.dto.UserCreateDto;
import com.example.hsmbackend.dto.UserDto;
import com.example.hsmbackend.model.User;
import com.example.hsmbackend.service.UserCRUDServiceImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
@RestController
public class UserController {
    private final UserCRUDServiceImpl userCRUDService;

    @PostMapping("/api/users")
    public ResponseEntity<?> createUser(@Valid @RequestBody UserCreateDto userCreateDto) {
        try {
            return ResponseEntity.ok(userCRUDService.createUser(userCreateDto));
        } catch (RuntimeException e) {
            return ResponseEntity.status(409).body(e.getMessage());
        }
    }

    @GetMapping("/api/users")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        return ResponseEntity.ok(userCRUDService.getAllUsers());
    }

    @GetMapping("/api/users/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userCRUDService.getUserById(id));
    }

    @PutMapping("/api/users/{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable Long id, @RequestBody UserCreateDto userCreateDto) {
        return ResponseEntity.ok(userCRUDService.updateUser(id, userCreateDto));
    }

    @DeleteMapping("/api/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userCRUDService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/api/users/login")
    public ResponseEntity<Boolean> login(@RequestBody LoginRequestDto loginRequestDto) {
        boolean successfulLogin = userCRUDService.login(loginRequestDto);
        if (!successfulLogin) {
            return ResponseEntity.status(401).body(false);
        }
        return ResponseEntity.ok(true);
    }
}