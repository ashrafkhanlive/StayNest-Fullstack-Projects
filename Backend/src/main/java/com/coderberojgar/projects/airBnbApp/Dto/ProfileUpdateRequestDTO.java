package com.coderberojgar.projects.airBnbApp.Dto;

import com.coderberojgar.projects.airBnbApp.Enums.Gender;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ProfileUpdateRequestDTO {
    private String name;
    private LocalDate dateOfBirth;
    private Gender gender;
}