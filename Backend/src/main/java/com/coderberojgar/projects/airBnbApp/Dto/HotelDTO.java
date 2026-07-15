package com.coderberojgar.projects.airBnbApp.Dto;

import com.coderberojgar.projects.airBnbApp.Entities.HotelContactInfo;
import com.coderberojgar.projects.airBnbApp.Entities.RoomEntity;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class HotelDTO {
    private Long id;
    private String name;
    private String city;
    private String[] photos;
    private String[] amenities;
    private HotelContactInfo contactInfo;
    private Boolean active;
}
