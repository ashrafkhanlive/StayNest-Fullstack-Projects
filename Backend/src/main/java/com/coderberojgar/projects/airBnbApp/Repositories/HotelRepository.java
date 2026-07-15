package com.coderberojgar.projects.airBnbApp.Repositories;

import com.coderberojgar.projects.airBnbApp.Entities.HotelEntity;
import com.coderberojgar.projects.airBnbApp.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelRepository extends JpaRepository<HotelEntity,Long> {
    List<HotelEntity> findByOwner(UserEntity user);
}
