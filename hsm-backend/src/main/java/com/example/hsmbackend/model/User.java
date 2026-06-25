package com.example.hsmbackend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "User name is required")
    @Column(name = "last_name")
    private String lastName;
    @NotBlank(message = "First name is required")
    @Column(name = "first_name")
    private String firstName;
    @NotNull(message = "Birth date is required")
    @Past
    @Column(name = "birth_date")
    private LocalDate birthDate;
    @NotBlank(message = "Email is required")
    @Email(message = "Email must be valid")
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    @NotBlank(message = "Password is required")
    @Size(min = 6, max = 100)
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*()_+]).{6,}$")
    @Column(name = "password")
    private String password;
    @Column(name = "created_at")
    private Date createdAt;
}