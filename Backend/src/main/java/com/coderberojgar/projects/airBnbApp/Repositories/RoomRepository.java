package com.coderberojgar.projects.airBnbApp.Repositories;

import com.coderberojgar.projects.airBnbApp.Entities.RoomEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<RoomEntity,Long> {
}
