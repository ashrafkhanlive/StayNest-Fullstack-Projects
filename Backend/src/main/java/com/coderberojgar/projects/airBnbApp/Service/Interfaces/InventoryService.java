package com.coderberojgar.projects.airBnbApp.Service.Interfaces;

import com.coderberojgar.projects.airBnbApp.Dto.*;
import com.coderberojgar.projects.airBnbApp.Entities.RoomEntity;
import org.springframework.data.domain.Page;

import java.util.List;

public interface InventoryService {
    void initializeRoomForAYear(RoomEntity room);

    void deleteAllInventories(RoomEntity room);

    Page<HotelPriceDTO> searchHotels(HotelSearchRequest hotelSearchRequest);

    List<InventoryDTO> getAllInventoryByRoom(Long roomId);

    void updateInventory(Long roomId, UpdateInventoryRequestDTO updateInventoryRequestDto);
}
