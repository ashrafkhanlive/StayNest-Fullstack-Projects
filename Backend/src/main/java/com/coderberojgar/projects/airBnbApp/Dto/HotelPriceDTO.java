package com.coderberojgar.projects.airBnbApp.Dto;

import com.coderberojgar.projects.airBnbApp.Entities.HotelEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HotelPriceDTO {
    private HotelEntity hotel;
    private Double price;
}