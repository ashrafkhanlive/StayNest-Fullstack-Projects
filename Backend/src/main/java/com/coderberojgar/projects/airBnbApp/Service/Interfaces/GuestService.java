package com.coderberojgar.projects.airBnbApp.Service.Interfaces;



import com.coderberojgar.projects.airBnbApp.Dto.GuestDTO;

import java.util.List;

public interface GuestService {

    List<GuestDTO> getAllGuests();

    void updateGuest(Long guestId, GuestDTO guestDto);

    void deleteGuest(Long guestId);

    GuestDTO addNewGuest(GuestDTO guestDto);
}
