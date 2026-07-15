package com.coderberojgar.projects.airBnbApp.Repositories;

import com.coderberojgar.projects.airBnbApp.Dto.GuestDTO;
import com.coderberojgar.projects.airBnbApp.Entities.GuestEntity;
import com.coderberojgar.projects.airBnbApp.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GuestRepository extends JpaRepository<GuestEntity, Long> {
    List<GuestDTO> findByUser(UserEntity user);
}