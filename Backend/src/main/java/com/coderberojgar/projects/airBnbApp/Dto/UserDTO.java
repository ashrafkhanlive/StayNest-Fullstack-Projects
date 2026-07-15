package com.coderberojgar.projects.airBnbApp.Dto;

import com.coderberojgar.projects.airBnbApp.Enums.Gender;
import lombok.Data;

import java.time.LocalDate;

@Data
public class UserDTO {
    private Long id;
    private String email;
    private String name;
    private Gender gender;
    private LocalDate dateOfBirth;
}