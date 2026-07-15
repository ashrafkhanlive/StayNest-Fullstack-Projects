package com.coderberojgar.projects.airBnbApp.Utils;

import com.coderberojgar.projects.airBnbApp.Entities.UserEntity;
import org.springframework.security.core.context.SecurityContextHolder;

public class AppUtils {

    public static UserEntity getCurrentUser() {
        return (UserEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }
}