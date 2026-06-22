package com.example.hsmbackend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @NotNull
    @NotEmpty
    @Column(name = "first_name")
    private String firstName;
    @NotBlank
    @NotNull
    @NotEmpty
    @Column(name = "last_name")
    private String lastName;
    @NotNull
    @Past
    @Column(name = "birth_date")
    private Date birthDate;
    @Email
    @NotBlank
    @NotNull
    @Column(name = "email")
    private String email;
    @Size(min = 6, max = 100)
    @NotNull
    @NotBlank
    @NotEmpty
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*()_+]).{8,}$")
    @Column(name = "password")
    private String password;
    @Column(name = "created_at")
    private Date createdAt;

}
