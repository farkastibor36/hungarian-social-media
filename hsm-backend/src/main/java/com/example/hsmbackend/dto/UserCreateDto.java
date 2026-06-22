package com.example.hsmbackend.dto;

import java.sql.Date;

public record UserCreateDto(String firstName, String lastName, Date birthDate, String email,
                            String password) {
}