package com.example.hsmbackend.dto;

import java.time.LocalDate;
import java.util.Date;

public record UserCreateDto(String lastName, String firstName, LocalDate birthDate, String email,
                            String password, Date createdA) {
}