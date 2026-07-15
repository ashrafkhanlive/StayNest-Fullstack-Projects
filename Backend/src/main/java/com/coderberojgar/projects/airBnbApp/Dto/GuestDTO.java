package com.coderberojgar.projects.airBnbApp.Dto;


import com.coderberojgar.projects.airBnbApp.Entities.UserEntity;
import com.coderberojgar.projects.airBnbApp.Enums.Gender;
import lombok.Data;

@Data
public class GuestDTO {
    private Long id;
    private String name;
    private Gender gender;
    private Integer age;
}