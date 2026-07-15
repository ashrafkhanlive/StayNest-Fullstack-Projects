package com.coderberojgar.projects.airBnbApp.Service.Interfaces;

import com.coderberojgar.projects.airBnbApp.Dto.HotelDTO;
import com.coderberojgar.projects.airBnbApp.Dto.HotelInfoDto;

import java.util.List;

public interface HotelService {
    HotelDTO createNewHotel(HotelDTO hotelDto);
    HotelDTO getHotelById(Long id);
    HotelDTO updateHotelById(Long id, HotelDTO hotelDto);
    void deleteHotelById(Long id);
    void activateHotel(Long hotelId);
    HotelInfoDto getHotelInfoById(Long hotelId);
    List<HotelDTO> getAllHotels();
}