package com.coderberojgar.projects.airBnbApp.Service.Interfaces;

import com.coderberojgar.projects.airBnbApp.Dto.ProfileUpdateRequestDTO;
import com.coderberojgar.projects.airBnbApp.Dto.UserDTO;
import com.coderberojgar.projects.airBnbApp.Entities.UserEntity;

public interface UserService {
    UserEntity getUserById(Long id);

    void updateProfile(ProfileUpdateRequestDTO profileUpdateRequestDto);

    UserDTO getMyProfile();
}